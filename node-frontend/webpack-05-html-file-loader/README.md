## html-loader, file-loader

- ### npm install
```
npm install --save-dev html-loader
npm install --save-dev file-loader
```

- ### webpack.config.js 수정
```javascript
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'img'
                    }
                }
            }
        ]
    }
```

## clean-webpack-plugin

- ### npm install
```
npm install clean-webpack-plugin
```

- ### webpack.prod.js 수정
```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin()
    ]
});
```
