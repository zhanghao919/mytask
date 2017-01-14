$(function () {
    $tableData = $(".table tbody");
    listNews();

    function listNews() {
        $.ajax({
            type: 'GET',
            url: '/admin/listNews',
            dataType: 'json',
            success: function (text) {
                //渲染数据之前，先情空列表
                console.log(text);
                $tableData.empty();
                text.forEach(function (obj, index) {
                    var $tdId = $("<td>").html(obj.news_id);
                    var $tdTitle = $("<td>").html(obj.news_title.slice(0, 8));
                    var $tdContent = $("<td>").html(obj.news_content.slice(0, 8));
                    var $tdMark = $("<td>").html(obj.news_mark);
                    var $tdTime = $("<td>").html(obj.post_time);
                    var $tdType = $("<td>").html(obj.news_classification);
                    var $editBtn = $("<button>").addClass("btn btn-primary btn-xs").html("编辑");
                    var $delBtn = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
                    var $tdOperator = $("<td>").append($editBtn, $delBtn);
                    var $tr = $("<tr>");
                    $tr.append($tdId, $tdTitle, $tdContent, $tdMark, $tdTime, $tdType, $tdOperator);
                    $tableData.append($tr);
                });
            }
        })
    }

    //事件委托
    var newsId = null;
    $(".table").on('click', '.btn-danger', function () {
        $("#delModal").modal("show");
        newsId = $(this).parent().prevAll().eq(5).html();
    });
    //删除确认，向后台发送数据
    $("#confirmBtn").on('click', function () {
        $.ajax({
            type: 'GET',
            url: '/admin/del',
            data: {'newsId': newsId},
            dataType: 'json',
            success: function (data) {  //数据成功返回之后的回调函数
                console.log(data);
                listNews(); //让新闻列表再次渲染
            }
        });
        $("#delModal").modal("hide");
    })

    //添加文章
    //点击添加文章 调用添加文章的模态框
    $("#add").click(function () {
        $("#addModal").modal("show");
    });
    //点击模态框添加文章按钮 向后台发送数据
    $("#addBtn").click(function () {
        $("#addForm").ajaxSubmit({
            // data:newsJson,
            dataType: 'json',
            beforeSend: function () {
                console.log("提交表单..");
            },
            success: function (data) {
                console.log(data);
                $("#addForm")[0].reset();  //重置表单
                $("#addModal").modal("hide");
                listNews();
            }
        })

    });


    //编辑新闻，事件委托打开模态框  加载数据
    $(".table").on("click", ".btn-primary", function () {
        //打开编辑模态框
        $("#editModal").modal("show");
        //加载载数据
        newsId = $(this).parent().prevAll().eq(5).html();
        //向后台发送请求
        $.ajax({
            type: "GET",
            url: "/admin/getRow",
            data: {"newsId": newsId},
            dataType: "json",
            success: function (data) {
                $("#editNewsId").val(data[0].news_id);
                $("#editNewsTitle").val(data[0].news_title);
                $("#editNewsContent").val(data[0].news_content);
                $("#editNewsMark").val(data[0].news_mark);
                $("#editNewsType").val(data[0].news_classification);
                $("#editThumbImg").attr("src",data[0].news_Thumbnail.slice(9));
            }
        })
    })

    //点击模态框的编辑文章按钮 发送数据到后台做修改
    $("#editBtn").click(function () {
        //直接提交到后台
        $("#editForm").ajaxSubmit({
            dataType: 'json',
            beforeSend: function () {
                console.log("提交表单..");
            },
            success: function (data) {
                console.log(data);
                $("#editForm")[0].reset();  //重置表单
                $("#editModal").modal("hide");
                listNews();
            }

        })
    });
});

