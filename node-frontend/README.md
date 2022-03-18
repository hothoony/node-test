## npm init
```javascript
npm init -y
```

## npm install
- ### required
```javascript
// webpack
npm install webpack webpack-cli -D
npm install webpack-dev-server -D
// babel
npm install @babel/core @babel/cli babel-loader -D
npm install @babel/preset-env @babel/preset-react -D
// css, scss
npm install style-loader css-loader -D
npm install sass-loader node-sass -D
// react
npm install react react-dom
// html, file
npm install html-loader file-loader -D
// html-webpack-plugin
npm install html-webpack-plugin -D
// webpack-merge 
npm install webpack-merge -D
// clean-webpack-plugin
npm install clean-webpack-plugin
// mini-css-extract-plugin
npm install mini-css-extract-plugin -D
```
- ### optional
```javascript
// bootstrap
npm install bootstrap -D
// jquery popper.js
npm install jquery popper.js -D
```

## node config
- ### package.json
```json
"scripts": {
    "devbuild": "webpack --mode=development --watch",
    "build": "webpack --mode=production",
    "start": "webpack-dev-server --hot"
}
```

## webpack config
- ### webpack.config.js
```javascript
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

```

## babel config
- ### babel.config.json (.babelrc.json)
```javascript
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## webpack 실행
```
$ ./node_modules/.bin/webpack --mode=development
$ ./node_modules/.bin/webpack --mode=production
$ npx webpack

webpack --config webpack.dev.js
webpack --config webpack.prod.js
```

## babel 실행
```
$ ./node_modules/.bin/babel src
$ ./node_modules/.bin/babel src --out-dir lib
```

## webpack-dev-server
- ### auto build
```
webpack --mode=development --watch
webpack-dev-server --hot
```
