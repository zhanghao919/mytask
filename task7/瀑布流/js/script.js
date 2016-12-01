$(function() {
    // 监听滚动添加数据
    var dataImg = {
		"data": [{"src": "1.jpg"},
		{"src": "2.jpg"},
		{"src": "3.jpg"},
		{"src": "4.jpg"},
		{"src": "5.jpeg"},
		{"src": "6.jpg"},
		{"src": "7.jpg"},
		{"src": "8.jpg"},
		{"src": "9.jpg"},
		{"src": "0.jpg"}]
    };
    addImage(dataImg.data);

    $(window).scroll(function() {
        if (scrollside()) {
            addImage(dataImg.data);
        }
    });

    // 监听窗口宽度
    window.onresize = function() {
        imgLocation();
    };

    // 回到顶部
    $('#gotop').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
});

//图片加载
function addImage(data) {
    finishImage(data, function() {
        $.each(data, function(index, value) {
            var box = $("<div>").addClass("box").appendTo($("#container"));
            var content = $("<div>").addClass("content").appendTo(box);
            $("<img>").attr("src", "img/" + value.src).appendTo(content);
            $("<p>").html(value.p).appendTo(content);
        });
        imgLocation();
    })
}

function finishImage(data, done) {
    var deferList = data.map(function(src, index, arr) {
        var defer = $.Deferred();
        var img = new Image();
        img.src = "img/" + src.src;
        if (img.complete) {
            defer.resolve();
        } else {
            img.onload = function() {
                defer.resolve();
            }
        }
        return defer;
    });
    $.when.apply($, deferList).done(done);
}

// 图片定位
function imgLocation() {
    var box = $(".box");
    var width = box.eq(0).width();
    var num = Math.floor($(window).width() / width);
    $("#container").css({
        "width": num * width
    });
    var boxArr = [];
    box.each(function(index, value) {
        var height = box.eq(index).height();
        if (index < num) {
            boxArr[index] = height;
            $(this).css({
                "position": "relative",
                "top": "0",
                "left": "0"
            });
        } else {
            var minBoxHeight = Math.min.apply(null, boxArr);
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);
            $(this).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": box.eq(minBoxIndex).position().left
            });
            boxArr[minBoxIndex] += $(this).height();
        }
    });
}

// 监听滚动
function scrollside() {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()) / 2
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return windowHeight + scrollHeight >= lastBoxHeight ? true : false;
}

// 回到顶部
$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('#gotop').css("visibility", "hidden");
    } else {
        $('#gotop').css("visibility", "visible");
    }
});
