var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
    var _config = {
        autoWatch: true,
        basePath: '',
        browser: ['Chrome'],
        browserConsoleLogOptions: {
            level: 'log',
            format: '%b %T: %m',
            terminal: true
        },
        colors: true,
        files: [{
            pattern: './karma-shim.js',
            watched: true
        }],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        port: 9876,
        preprocessors: {
            './karma-shim.js': ['webpack', 'sourcemap']
        },
        reporters: ['kjhtml', 'dots'],
        singleRun: false,
        webpack: webpackConfig,
        webpackMiddleware: { stats: 'errors-only' },
        webpackServer: { noInfo: true }
    };

    config.set(_config);
};
