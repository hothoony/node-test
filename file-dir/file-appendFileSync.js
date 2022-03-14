const fs = require('fs');

const content = '파일 쓰기 테스트\n';

try {
    fs.appendFileSync('./out/append2.txt', content);
} catch (err) {
    console.error(err);
}
