const fs = require('fs');

const content = '파일 쓰기 테스트';

try {
    fs.writeFileSync('./out/out2.txt', content);
} catch (err) {
    console.error(err);
}