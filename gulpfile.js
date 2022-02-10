const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-webserver');

gulp.task ('css', () => {
  return gulp.src('scss/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

// run locally
gulp.task ('server', () => {
  return gulp.src('/', {'allowEmpty': true})	// <-- your app folder
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', gulp.series(['css', 'server']));
