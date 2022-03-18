# webpack.config.js | dev, prod 분리

## npm installl
- ### webpack-merge 설치
```
npm install --save-dev webpack-merge
```

## webpack.config.js 파일 분리
- ### webpack.common.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    }
}

```

- ### webpack.dev.js
```javascript
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

```

- ### webpack.prod.js
```javascript
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist/prod'),
        filename: 'main.[contenthash].js',
    },
});
```

- ### package.json 수정
```json
  "scripts": {
    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
```

- ### npm 실행
```bash
# dev
npm start

# prod
npm run build
```

## webpack-dev-server 설치
```
npm install --save-dev webpack-dev-server
```
- ### package.json 수정
```json
  "scripts": {
    "start": "webpack-dev-server --config webpack.dev.js --open",
  },
```
