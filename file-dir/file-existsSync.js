const fs = require('fs');

const dirName = './out/newDir';

if (!fs.existsSync(dirName)) {
    console.log('dir not exist', dirName);
} else {
    console.log('dir exist');
}
