# css, scss 적용

## style-loader, css-loader 설치
```
npm i --save-dev style-loader css-loader
```

## sass-loader, node-sass 설치
```
npm i --save-dev sass-loader node-sass
```

## bootstrap 설치
```
npm i --save-dev bootstrap
```

## style.scss
```scss
$primary: red;

@import '~bootstrap/scss/bootstrap';
```

## webpack.config.js 수정
```javascript
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
```
