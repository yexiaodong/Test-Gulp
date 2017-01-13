var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var paths = ['Scripts/data.js','Scripts/ui.js'];
var sassPaths = 'Sass/*.scss';
var scriptsPaths = 'Scripts/*.js';

//默认执行任务,task调用task，先执行sass，再执行js，最后执行main
gulp.task('default',['sass','js','browser-sync','watch'], function() {
    console.log('完成');
    return;
});
//实时监测
gulp.task('watch',function () {
    gulp.watch(sassPaths,['sass']);
    gulp.watch(scriptsPaths,['js']);
});

//js
gulp.task('js', function() {
    gulp.src(paths)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('Scripts'));
    return;
});
//sass
var sass = require('gulp-sass');
gulp.task("sass",function () {
    return gulp.src('Sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('Styles'));
});
//browserSync
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        browser: ["chrome", "firefox","Opera","iexplore"],
        files: ["*.html","Styles/app.css","Scripts/all.min.js"],
        server: {
            baseDir: "./"
        }
    });
});
