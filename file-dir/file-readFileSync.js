const fs = require('fs');

try {
    const data = fs.readFileSync('./out/info.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(data);
}
