//一、导入模块
let gulp = require('gulp');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let babel = require('gulp-babel');
//二  发布任务
function fnJS(){
     return gulp.src('./src/js/*.js')
         .pipe(babel({
              presets: ['@babel/env']
            }))
         .pipe(uglify())
         .pipe(rename({suffix : '.min'}))
         .pipe(gulp.dest('./dist/js'));
        }
//优化css
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}
//优化图片
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//复制index.html
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));

}
function fnCopypages(){
    return gulp.src('./src/pages/*.html')
    .pipe(gulp.dest('./dist/pages'))
}
//监听任务
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/img/*',fnImg)
    gulp.watch('./src/pages/*.html',fnCopypages)
    
}
//三、导出任务
exports.sass = fnSass;
exports.js = fnJS;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.Copypages = fnCopypages;
exports.default = fnWatch;
