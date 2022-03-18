const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist/prod'),
        filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});
