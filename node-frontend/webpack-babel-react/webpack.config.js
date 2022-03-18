const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
        // filename: 'bundle.[contentHash].js'
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
    optimization: {

    },
    plugins: [

    ],
    devtool: 'none',
    // devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'inline-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
};
