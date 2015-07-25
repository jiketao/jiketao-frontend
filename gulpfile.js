var gulp = require('gulp');
var less = require('gulp-less');
var myth = require('gulp-myth');
    
// watch = require('gulp-watch');
gulp.task('lessc', function() {
    return gulp.src(['src/less/biz/*.less'])
      .pipe(less())
      .on('error', function(err) {
      	console.log('error');
      })
      // .pipe(myth())
      .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function() {
	return gulp.watch(['src/less/biz/**/*.less'], ['lessc'])
});


gulp.task('default', ['lessc', 'watch']);