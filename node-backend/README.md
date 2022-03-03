# node backend
## backend library
- `express` web server
- `morgan` log
- `winston` log
- `ejs` view template
- `nodemon` server auto restart
- `body-parser` request body parsing

## npm install
- ### express
    ```javascript
    // install
    npm install express --save
    ```
    ```javascript
    // app.js
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('index page');
    });

    app.listen(8080, function() {
        console.log('server start');
    });
    ```
    ```bash
    # usage
    node app.js
    ```

- ### nodemon
    ```javascript
    // install, 전역으로 설치
    sudo npm install nodemon -g
    ```
    ```javascript
    // usgae
    // 소스 파일이 수정되는 경우 서버를 자동으로 restart 해준다
    nodemon ./bin/www.js
    ```

- ### body-parser
    ```javascript
    // install
    npm install body-parser --save
    ```
    ```javascript
    // usage
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    ```
