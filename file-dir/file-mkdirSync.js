const fs = require('fs');

const dirName = './out/newDir';

try {
    fs.mkdirSync(dirName);
    console.log(`${dirName} is created`);
} catch (err) {
    console.error(err);
}
