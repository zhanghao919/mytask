fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});
fis.match('*.{js,css,jpg,png}', {
    useHash: true  //�Ƿ�ʹ�ù�ϣ�㷨
});
fis.match('*.less', {
    // fis-parser-less ������н���
    parser: fis.plugin('less'),
    // .less �ļ���׺�����󱻸ĳ� .css �ļ�
    rExt: '.css'
});
fis.match('*.js', {  //ѹ��js
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {  //ѹ��css
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});
//fis.match('*.png', {  //ѹ��png
//    optimizer: fis.plugin('png-compressor')
//});
fis.match('*.html', {
    optimizer: fis.plugin('html-minifier')
});
