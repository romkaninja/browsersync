/*global require*/

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    "use strict";

    browserSync.init({
        server: "./"
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
