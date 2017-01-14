fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});
fis.match('*.{js,css,jpg,png}', {
    useHash: true  //是否使用哈希算法
});
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
});
fis.match('*.js', {  //压缩js
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {  //压缩css
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});
//fis.match('*.png', {  //压缩png
//    optimizer: fis.plugin('png-compressor')
//});
fis.match('*.html', {
    optimizer: fis.plugin('html-minifier')
});
