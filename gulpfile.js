var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (){
	gulp.src('./app/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css'));
});
gulp.task('sass:watch', function (){
	gulp.watch('./app/scss/**/*.scss', ['sass']);
});