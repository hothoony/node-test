- ### npm install
```
npm install --save-dev mini-css-extract-plugin
```

## webpack.config.js 수정

- ### webpack.common.js
```javascript
// module > rules > css 를 삭제하고 dev, prod 로 각각 분기
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
        ]
    }
```

- ### webpack.dev.js
```javascript
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
        ]
    }
```

- ### webpack.prod.js
```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
            },
        ]
    }
});
```

## optimize-css-assets-webpack-plugin
- ### npm install
```
npm install --save-dev optimize-css-assets-webpack-plugin
```
