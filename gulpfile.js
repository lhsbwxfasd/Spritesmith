/*
    @auther 李华 2018
*/
let gulp = require('gulp')
let spritesmith = require("gulp.spritesmith")
let minimist = require('minimist')
let envirionment = minimist(process.argv.slice(2))

let folderName = envirionment.n
let imagesPath = './images/'
let folderPath = imagesPath + folderName
gulp.task('png', () => {
    gulp.src(folderPath + '/*.png')
        .pipe(spritesmith({
            padding: 0,
            imgName: 'image/icon-' + folderName + '.png', //参数，生成图片文件名
            cssName: 'css/icon-' + folderName + '.css', //参数，生成的样式文件名
            cssFormat: "css",
            cssOpts: {
            	cssSelector: (sprite) => {
            		return '.i-' + sprite.name;
            	}
            },
            
            cssTemplate:(data) => {
            	let arr = [],
		        width = data.spritesheet.px.width,
		        height = data.spritesheet.px.height,
		        url = data.spritesheet.image;
arr.push(`.i-${folderName} {
  	background: url("${url}") no-repeat;
} 
`);
data.sprites.forEach(function(sprite) {arr.push(`.i-${folderName}-${sprite.name} {
	width: ${sprite.px.width}; 
	height: ${sprite.px.height}; 
	background-position: ${sprite.px.offset_x} ${sprite.px.offset_y}; 
} 
`);
				});
				return arr.join('');
            }
        }))
        .pipe(gulp.dest(folderPath + '/dist/'));
});