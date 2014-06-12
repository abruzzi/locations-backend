var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('js', function() {
    return gulp.src(['src/*.js', 'test/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function() {
    gulp.start('js');
});
