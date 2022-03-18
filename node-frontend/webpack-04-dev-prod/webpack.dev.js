const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist/dev'),
        filename: 'main.js',
    },
});
