/**
 * Created by Administrator on 2016/11/14.
 */

//头部隐藏部分显示
$(function(){
    $('.nav>ul>.sz').hover(function(){
        $(this).find('dl').toggle();
    });
    $('.nav>.more').hover(function(){
        $(this).find('.gdcp').toggle();
    });
});
//主体内容tab切换
$(function() {
    $('#nav li').each(function (index) {
        $(this).click(function () {
            $('#nav li').removeClass('cur');
            $(this).addClass('cur');
            //找到同样的div
            $("#container > div").hide().eq($('#nav li').index(this)).show();
        });
    });
});
//换肤
$(function(){
    $('.skin-img-list>li').hover(function(){
        var index=$(this).index()+1;
        $('.effect-con>img').attr('src','img/'+index +'.jpg');
    });
    $('.skin-img-list>li').click(function(){
        var index=$(this).index()+1;
        console.log(index);
        $('body,html').css({
            'background-image':'url(img/'+index+'.jpg)',
            'background-size':'cover'
        });
        $('.logo>img').attr('src','img/logo2.png');
        localStorage.setItem('bg-image','url(img/'+index+'.jpg)');
    });
    $('.settings>.pack-up').click(function(){
        $('.peel').hide();
    });
    $('.weather-news>.s-icons>.s-skin').click(function(){
        $('.peel').show();
        event.stopPropagation();
    });
    $('document').click(function(){
        var targetId = event.target ? event.target.id : event.srcElement.id;
        if(targetId !='peel') {
            $('.peel').hide();
        }
        })
});


//右下角返回顶部
$(function(){
    $('.to-top').hover(function(){
       $(this).find('.totop-text').toggle();
    });
    //点击回到顶部
    $('.to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
});
//回到顶部隐藏
$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('.to-top').css("visibility", "hidden");
    } else {
        $('.to-top').css("visibility", "visible");
    }
});