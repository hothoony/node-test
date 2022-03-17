## npm init
```javascript
npm init -y
```

## npm install
```javascript
// webpack
npm install webpack webpack-cli -D
npm install webpack-dev-server -D
// babel
npm install @babel/core @babel/preset-env babel-loader -D
npm install @babel/preset-react -D
// css
npm install css-loader style-loader -D
// scss
npm install sass-loader node-sass -D
```

## node config
- ### package.json
```json
"scripts": {
    "start": "webpack --mode=development",
    "build": "webpack --mode=production",
    "dev": "webpack-dev-server"
}
```

## webpack config
- ### webpack.config.js
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
```

## babel config
- ### .babelrc
```javascript
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```