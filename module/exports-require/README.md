### app.js
```javascript
const index = require('./routes/home');
console.log('index :', index());

const lib = require('./routes/home/lib');
console.log('lib.nowDate :', lib.nowDate());
lib.hello();

```

### index.js (routes/home)
```javascript
'use strict';

const homeRoot = () => {
    return 'here is home root';
};

module.exports = homeRoot;

```

### lib.js (routes/home)
```javascript
"use strict";

const nowDate = () => {
    return new Date();
};

const hello = () => {
    console.log('lib hello');
};

module.exports = {nowDate, hello};

```

### 실행
```shell
$ node app.js
index : here is home root
lib.nowDate : 2022-03-01T03:48:27.176Z
lib hello
```
