'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle:app']);

gulp.task('bundle:app',function(){
  var bundleStream = browserify('./src/main.js');
  bundleStream
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js/'));

  return bundleStream;
});