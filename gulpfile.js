var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');
var browserSync = require("browser-sync").create();
var config = require('./webpack.config.js');

gulp.task('build', function() {
  return gulp
    .src('src/index.js')
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulp.dest('build/'));
});

gulp.task('js-watch', ['build'], function() {
  browserSync.reload();
});

gulp.task('default', ['build'], function() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch([
    'index.html', 'src/**/*', 'gulpfile.js', 'package.json'
  ], ['js-watch']);
});
