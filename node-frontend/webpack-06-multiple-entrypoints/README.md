
- ### vendor.js 파일 생성
```javascript
alert('hi from vendor');

import 'bootstrap';
```

- ### webpack.common.js 수정
```javascript
module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
```

- ### webpack.dev.js 수정
```javascript
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
    },
});
```

- ### webpack.prod.js 수정
```javascript
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
    },
});
```

- ### npm install
```
npm install --save-dev jquery popper.js
```
