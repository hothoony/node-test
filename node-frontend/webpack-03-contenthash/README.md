# contenthash 적용

## webpack.config.js 수정
```javascript
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
    },
```

## html-webpack-plugin 적용
- ### 설치
```
npm i --save-dev html-webpack-plugin
```
- ### webpack.config.js 수정
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ],
```
- ### template 파일 생성
```
src/template/index.html
```
- ### 실행
```
npm start
```
- ### dist 폴더 확인
```
$ ll dist
total 2552
drwxr-xr-x  5 user  admin    160 Mar 18 21:13 ./
drwxr-xr-x  9 user  admin    288 Mar 18 21:13 ../
-rw-r--r--  1 user  admin    386 Mar 18 21:13 index.html
-rw-r--r--  1 user  admin  95815 Mar 18 21:13 main.4eefb8e5e21e0ac80875.js
-rw-r--r--  1 user  admin  03498 Mar 18 21:13 main.4eefb8e5e21e0ac80875.js.map
```
