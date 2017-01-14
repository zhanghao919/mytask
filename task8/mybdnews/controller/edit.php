<?php
require_once("../model/DBUtils.php");
$newsId = $_GET['newsId'];
//通过id值 找到这条新闻数据的所有字段
$row = findById($newsId);
function findById($id){
    $connect = DBUtils::getConnection();
    $sql = "select * from news where news_id = $id";
    $result = mysqli_query($connect,$sql);
    $row = mysqli_fetch_assoc($result);
    return $row;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加文章</title>
    <!--响应式，约束缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- 通知IE采用其支持的最新模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 引入bootstrap-->
    <link rel="stylesheet" href="../tpl/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h3>编辑文章</h3>
    <form action="../controller/NewsController.php?do=add" method="post" enctype="multipart/form-data">
        <!--表单项-->
        <input type="hidden" name="newsId" value="<?php echo $row["news_id"]?>">
        <div class="form-group">
            <label for="newsTitle" class="col-lg-2" >标题</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" id="newsTitle"
                       name="newsTitle" value="<?php echo $row["news_title"]?>" placeholder="请输入标题" required/>
            </div>
        </div>
        <div class="form-group">
            <label for="newsContent" class="col-lg-2">内容</label>
            <div class="col-lg-10">
                <textarea type="text" class="form-control" id="newsContent"
                          name="newsContent"  placeholder="请输入内容" required><?php echo $row["news_content"]?></textarea>
            </div>
        </div>
        <div class="form-group">
            <label for="newsMark" class="col-lg-2">标注</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" id="newsMark"
                       name="newsMark" value="<?php echo $row["news_mark"]?>"  placeholder="请输入来源或标注" required>
            </div>
        </div>
        <div class="form-group">
            <label for="file" class="col-lg-2">缩略图</label>
            <div class="col-lg-10">
                <img width="150px" height="100px" src="<?php echo $row['path_name']?>" alt="">
                <input type="file" class="form-control" id="file"
                       name="file">
            </div>
        </div>
        <div class="form-group">
            <label for="newsClassify" class="col-lg-2">分类</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" id="newsClassify"
                       name="newsClassify"  value="<?php echo $row["news_classification"]?>" placeholder="请输入内容" required>
            </div>
        </div>
        <button class="btn btn-primary">提交</button>
    </form>
</div>
</body>
</html>