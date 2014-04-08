var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch');

gulp.task('less', function() {
    gulp.src('./less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./web/css'));
});

gulp.task('default', function () {
    gulp.watch('./less/**/*.less', ['less']);
});