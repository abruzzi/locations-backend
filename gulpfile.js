var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require("vinyl-source-stream"),
    harmonize = require('harmonize');

harmonize();

gulp.task('convert', function () {
  return gulp.src('src/react/components/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('src/react-build/'));
});

gulp.task('backbone', function() {
    var b = browserify();
    b.add('src/backbone/app.js');
    return b.bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('src/backbone-build/'));
});

gulp.task('browserify', ['convert'], function(){
  var b = browserify();
  b.transform(reactify);
  b.add('src/react-build/main.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('src/react-build/'));
});

gulp.task('js', function() {
    return gulp.src(['src/*.js', 'test/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

var Config = function() {
    'use strict';

    var config = this;

    this.set = function(newConfig) {
        Object.keys(newConfig).forEach(function(key) {
            config[key] = newConfig[key];
        });
    };
};

var _ = require('lodash');
var karma = require('karma').server;

var conf = new Config();
var func = require('./karma.conf.js');

var confbb = new Config();
var funcbb = require('./karma.bb.js');

func(conf);
funcbb(confbb);

gulp.task('bbunit', function(done) {
  karma.start(_.assign({}, confbb, {singleRun: false, logLevel: 'INFO'}), done);
});

gulp.task('ci', function(done) {
    karma.start(_.assign({}, conf, {singleRun: true, logLevel: 'INFO'}), done);
});

gulp.task('unit', function(done) {
    karma.start(conf, done);
});

gulp.task('default', function() {
    gulp.start('js', 'ci');
});
