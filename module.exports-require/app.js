const index = require('./routes/home');
const lib = require('./routes/home/lib');
const {ltrim, rtrim} = require('./routes/home/lib2');

console.log('index :', index());

console.log('lib.nowDate :', lib.nowDate());
lib.hello();

ltrim();
rtrim();
