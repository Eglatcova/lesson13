const gulp = require('gulp');
const browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('hello', (done) => {
  console.log('Привет, мир!')
  done();
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
  return gulp.src('./style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});