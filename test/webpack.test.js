var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                loaders: [{
                    loader: 'ts-loader'
                }, 'angular2-template-loader'],
                test: /\.ts$/
            },
            {
                loader: 'html-loader?attrs=false',
                test: /\.html$/
            },
            {
                loader: 'null-loader',
                test: /\.{png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico}$/
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
                /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
            path.resolve(__dirname, './src')
        )
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};
