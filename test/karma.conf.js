var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
    config.set({
        autoWatch: true,
        basePath: '',
        browsers: ['PhantomJS'],
        colors: true,
        concurrency: Infinity,
        files: [
            './karma-shim.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_ERROR,
        preprocessors: {
            './karma-shim.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        singleRun: false,
        webpack: webpackConfig,
        webpackMiddleware: { noInfo: true }
    });
};
