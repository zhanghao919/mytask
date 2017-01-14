listNews();
function listNews() {
    var xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject("Microsoft XMLHttp");
    var url = "../controller/NewsController.php?do=list";
    xhr.open("get",url,true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                var jsonArr = data.split("#");
                var obj = {};
                for(var i in jsonArr){
                    if(i != jsonArr.length -1){
                        obj = JSON.parse(jsonArr[i]);
                        var tr = document.createElement("tr");
                        var updateUrl = "../controller/edit.php?newsId="+ obj['news_id'];
                        var delUrl = "../controller/NewsController.php?do=del&newsId="+ obj['news_id'];
                        tr.innerHTML = "<td>"+obj['news_id']+"</td>" +
                            "<td>"+obj["news_title"].slice(0,8)+"</td>" +
                            "<td>"+obj["news_content"].slice(0,8)+"</td>" +
                            "<td>"+obj["news_mark"]+"</td>" +
                            "<td>"+obj["post_time"]+"</td>" +
                            "<td>"+obj["news_classification"]+"</td>"+
                            "<td><a href="+updateUrl+">修改</a> | <a href="+ delUrl+">删除</a></td>"
                        ;
                        var tbody = document.getElementsByTagName("tbody")[0];
                        tbody.appendChild(tr);
                    }
                }
            }
        }
    }
    xhr.send(null);
}

//向后台发送删除请求
$(function (){
    $("td .delUrl").on('click',function (){
        alert(1);
        var newsId = $(this).data('newsid');
        var xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject("Microsoft XMLHttp");
        var url = "../controller/NewsController.php?do=del&newsId="+newsId;
        xhr.open("get",url,true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var result = xhr.responseText;
                    // console.log(result);
                }
            }
        }
        xhr.send(null);
    });
});

