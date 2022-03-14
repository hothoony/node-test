const fs = require('fs');

const dirName = './out/newDir';

try {
    fs.rmdirSync(dirName);
    console.log(`${dirName} is removed`);
} catch (err) {
    console.error(err);
}
