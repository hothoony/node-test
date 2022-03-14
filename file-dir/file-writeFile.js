const fs = require('fs');

const content = '파일 쓰기 테스트';

fs.writeFile('./out/out1.txt', content, err => {
    if (err) {
        throw err;
    }
});
