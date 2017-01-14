var express = require('express');
var mysql = require('mysql');
var multer  = require('multer');  //处理文件上传
var fs = require("fs");
var router = express.Router();


// 日期格式化
function padding(number){
    return number < 10 ? '0' + number : '' + number;
}
function format(date) {
    return date.getFullYear() + '-' + padding(date.getMonth() + 1) + '-' + padding(date.getDate()) + ' '
        + padding(date.getHours()) + ':' + padding(date.getMinutes()) + ':' + padding(date.getSeconds());
}

//创建数据库连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'bdnews'
});

connection.connect();//开启数据库连接
router.get('/', function(req, res, next) {//req代表请求  res代表响应
    res.sendfile('./public/admin.html');
});


//获取新闻列表
router.get('/listNews', function(req, res, next) {
    connection.query('select * from news order by news_id desc',function(err,rows){
        res.json(rows);
    });
});


//根据id删除新闻记录
router.get('/del', function(req, res, next) {
    //接受请求的newsId
    var newsId = req.query.newsId;
    connection.query("delete from news where news_id = ?",[newsId],function(err,rows){
        res.json(rows.changedRows);
    });
});

//处理文件上传
var fileName = "";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./public/upload/');    // 保存的路径，需要自己创建
    },
    filename: function (req, file, cb) { //file是上传后的文件
        // 将保存文件名设置为 时间戳，比如 1478521468943
        var suffix =  file.originalname.slice(file.originalname.indexOf("."));  //获取文件后缀名
        fileName = Date.now()+suffix;  //文件名 = 当前日期毫秒值+后缀名
        cb(null, fileName);
    }
});
var upload = multer({ storage: storage });  //初始化文件上传
//添加新闻路由
router.post('/add', upload.single('file'),function(req, res, next) { //single上传单张文件

    //定义文件保存路径
    var newsThumbnail = "./public/upload/"+fileName;
     console.log(newsThumbnail);
    //接受post请求的参数
    var newsId = req.body.newsId;
    var newsTitle = req.body.newsTitle;
    var newsContent = req.body.newsContent;
    var newsMark = req.body.newsMark;
    var postTime = format(new Date());
    var newsClassify = req.body.newsType;
    if(newsId){
        //如果newsId不为空，是编辑
        connection.query("update news set news_title = ?,news_content = ?,news_mark = ?,post_time = ?,news_classification = ? ,news_Thumbnail = ? where news_id = ?",
            [newsTitle,newsContent,newsMark,postTime,newsClassify,newsThumbnail,newsId],function(err,rows){
                res.json(rows);
            });
    }else{
        //是添加
        connection.query("insert into news values(?,?,?,?,?,?,?)",[,newsTitle,newsContent,newsMark,postTime,newsClassify,newsThumbnail],function(err,rows){
            res.json(rows);
        });
    }
});

//根据id获得一条新闻记录
router.get('/getRow', function(req, res, next) {
    //接受请求的newsId
    var newsId = req.query.newsId;
    connection.query("select * from news where news_id = ?",[newsId],function(err,rows){
        res.json(rows);
    });
});
module.exports = router;
