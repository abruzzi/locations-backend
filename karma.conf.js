// Karma configuration
// Generated on Thu Jun 12 2014 16:12:27 GMT+1000 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'templates/*.tmpl', included: false, served: true },
      { pattern: 'test/fixtures/**/*.html', included: false, served: true },
      { pattern: '*.json', included: false, served: true },
      'vendor/jquery/dist/jquery.js',
      'vendor/jasmine-jquery/lib/jasmine-jquery.js',
      'vendor/underscore/underscore.js',
      'src/*.js',
      'test/*spec.js'
    ],


    // list of files to exclude
    exclude: [
      'src/app-rewrite.js',
      'test/app-spec.js',
      'src/build/*.js',
      'src/build/react-build/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
