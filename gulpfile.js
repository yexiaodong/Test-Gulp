var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var paths = ['Scripts/data.js','Scripts/ui.js'];
var sassPaths = 'Sass/*.scss';

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
//task调用task，先执行sass，再执行js，最后执行main
gulp.task('main',['sass','js'],function () {
    console.log('完成');
});

//默认执行任务
gulp.task('default', function() {
    gulp.src(paths)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('Scripts'));
    return;
});

//实时监测
gulp.task('watch',function () {
    gulp.watch(sassPaths,['sass']);
});



