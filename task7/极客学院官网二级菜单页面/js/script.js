/**
 * Created by Administrator on 2016/11/21.
 */
//��������
$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('div').toggle();
    });
    //��¼/aap������������
    $('.icon-x>.download-icon,.login-icon').hover(function(){
        $(this).find('.submenu').toggle();
    });
    //����
    $('.search-icon').click(function(){
        $('.search').fadeIn();
    });
    $('#cose').click(function(){
        $('.search').hide();
    })
});
//������ز�����ʾ
$(function(){
    $('.course>ul>li').hover(function(){
        $(this).find('.display-con').toggle();
    });
});
//�Ҳ�����������ʾ
$(function(){
    $('.sortMode>dl').hover(function(){
        $(this).find('.cc').toggle();
    });
    //��������Ч��
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
//table�л�
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
//���½����ض�ά��
$(function(){
    $('.jk-app').hover(function(){
        $('.appewm').toggle();
    });
    //���ض���
    //���Ƚ�#top����
    $("#top").hide();
    //����������λ�ô��ھඥ��100��������ʱ����ת���ӳ��֣�������ʧ
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#top").fadeIn(1500);
            } else {
                $("#top").fadeOut(1500);
            }
        });
        //�������ת���Ӻ󣬻ص�ҳ�涥��λ��
        $("#top").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });
});