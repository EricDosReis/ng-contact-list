var gulp        = require('gulp'),
		clean       = require('gulp-clean'),
		concat      = require('gulp-concat'),
		uglify      = require('gulp-uglify'),
		htmlMin     = require('gulp-htmlmin'),
		cleanCSS    = require('gulp-clean-css'),
		babel       = require('gulp-babel'),
		runSequence = require('run-sequence'),
		gulpUtil    = require('gulp-util');

gulp.task('clean', function() {
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('uglify', function() {
	return gulp.src(['lib/**/*.js', 'js/**/*.js'])
	.pipe(concat('all.min.js'))
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify().on('error', gulpUtil.log))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('htmlMin', function() {
	return gulp.src('views/*.html')
	.pipe(htmlMin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist/views/'));
});

gulp.task('cssMin', function() {
	return gulp.src(['lib/bootstrap-css-only/css/bootstrap.css', 'css/*.css'])
	.pipe(cleanCSS())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('copy', function() {
	return gulp.src('index.html')
	.pipe(gulp.dest('dist/'));
});

gulp.task('default', function(cb) {
	return runSequence('clean', ['uglify', 'htmlMin', 'cssMin', 'copy'], cb);
});
