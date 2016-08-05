var gulp = require('gulp');
var twig = require('gulp-twig');
var data = require('gulp-data');
var path = require('path');

gulp.task('twig', function () {
	return gulp.src('./views/pages/*.twig')
		.pipe(data(function(file) {
			return require('./fixtures/' + path.basename(file.path, '.twig') + '.json');
		}))
		.pipe(twig())
		.pipe(gulp.dest('./public'));
});
