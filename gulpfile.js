var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var paths = ['Scripts/data.js','Scripts/ui.js'];
//paths = 'Scripts/*.js';
gulp.task('default', function() {
    gulp.src(paths)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('Scripts'));
    return;
});
