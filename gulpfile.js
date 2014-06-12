var gulp = require('gulp'),
    jshint = require('gulp-jshint');
var _ = require('lodash');
var karma = require('karma').server;

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

var conf = new Config();
var func = require('./karma.conf.js');

func(conf);

gulp.task('ci', function(done) {
    karma.start(_.assign({}, conf, {singleRun: true}), done);
});

gulp.task('unit', function(done) {
    karma.start(conf, done);
});

gulp.task('default', function() {
    gulp.start('js', 'ci');
});
