const fs = require('fs');

const content = '파일 쓰기 테스트\n';

fs.appendFile('./out/append1.txt', content, err => {
    if (err) {
        throw err;
    }
});
