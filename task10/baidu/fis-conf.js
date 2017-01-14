fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});






// fis.match(‘::packager’, {
// spriter: fis.plugin(‘csssprites’)
// });
// fis.match(‘.{js,css,jpg,png}’, {
// useHash: true //是否使用哈希算法
// });
// fis.match(‘.js’, { //压缩js
// optimizer: fis.plugin(‘uglify-js’)
// });
// fis.match(‘.css’, { //压缩css
// useSprite: true,
// optimizer: fis.plugin(‘clean-css’)
// });
// fis.match(‘.png’, { //压缩png
// optimizer: fis.plugin(‘png-compressor’)
// });