/**
 * Created by Administrator on 2016/11/14.
 */

//ͷ�����ز�����ʾ
$(function(){
    $('.nav>ul>.sz').hover(function(){
        $(this).find('dl').toggle();
    });
    $('.nav>.more').hover(function(){
        $(this).find('.gdcp').toggle();
    });
});
//��������tab�л�
$(function() {
    $('#nav li').each(function (index) {
        $(this).click(function () {
            $('#nav li').removeClass('cur');
            $(this).addClass('cur');
            //�ҵ�ͬ����div
            $("#container > div").hide().eq($('#nav li').index(this)).show();
        });
    });
});
//����
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


//���½Ƿ��ض���
$(function(){
    $('.to-top').hover(function(){
       $(this).find('.totop-text').toggle();
    });
    //����ص�����
    $('.to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
});
//�ص���������
$(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
        $('.to-top').css("visibility", "hidden");
    } else {
        $('.to-top').css("visibility", "visible");
    }
});