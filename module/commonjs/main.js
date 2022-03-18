const index = require('./util');
const lib = require('./util/lib');
const {ltrim, rtrim} = require('./util/trim');

console.log('index :', index());
console.log('lib.nowDate :', lib.nowDate());
lib.hello();
ltrim();
rtrim();
