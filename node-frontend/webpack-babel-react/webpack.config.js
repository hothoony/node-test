const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    devtool: 'inline-source-map', // development
    // devtool: 'cheap-module-source-map', // for production
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
};
