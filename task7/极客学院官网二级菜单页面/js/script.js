/**
 * Created by Administrator on 2016/11/21.
 */
//导航下拉
$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('div').toggle();
    });
    //登录/aap下载下拉内容
    $('.icon-x>.download-icon,.login-icon').hover(function(){
        $(this).find('.submenu').toggle();
    });
    //搜索
    $('.search-icon').click(function(){
        $('.search').fadeIn();
    });
    $('#cose').click(function(){
        $('.search').hide();
    })
});
//左侧隐藏部分显示
$(function(){
    $('.course>ul>li').hover(function(){
        $(this).find('.display-con').toggle();
    });
});
//右侧隐藏内容显示
$(function(){
    $('.sortMode>dl').hover(function(){
        $(this).find('.cc').toggle();
    });
    //下拉滑动效果
    $('.main-con>ul>li').hover(function(){
        $(this).find('.hide-ico').toggle();
        $(this).find('p').slideToggle(100);
        $(this).find('.zhongji').slideToggle(100);
        $(this).find('.people').slideToggle(100);
    });
    $('.main-con2>ul>li').hover(function(){
        $(this).find('.lessonplay').toggle();
    })
});
//table切换
$(function(){
    $('#kuai').click(function(){
        $('.main-con').show();
        $('.main-con2').hide();
    });
    $('#list').click(function(){
        $('.main-con').hide();
        $('.main-con2').show();
    })
});
//右下角隐藏二维码
$(function(){
    $('.jk-app').hover(function(){
        $('.appewm').toggle();
    });
    //返回顶部
    //首先将#top隐藏
    $("#top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#top").fadeIn(1500);
            } else {
                $("#top").fadeOut(1500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#top").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });
});