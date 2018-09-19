/*
    @auther 李华 2018
*/
let gulp = require('gulp')
let spritesmith = require("gulp.spritesmith")
let envirionment = minimist(process.argv.slice(2))

let folderName = envirionment.n
let imagesPath = './images/'
let folderPath = imagesPath + folderName
gulp.task('png', () => {
    gulp.src(folderPath + '/*.png')
        .pipe(spritesmith({
            padding: 10,
            imgName: 'image/icon-' + folderName + '.png', //参数，生成图片文件名
            cssName: 'css/icon-' + folderName + '.css' //参数，生成的样式文件名
        }))
        .pipe(gulp.dest(folderPath + '/dist/'));
});