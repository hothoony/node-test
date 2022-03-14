const index = require('./routes/home');
console.log('index :', index());

const lib = require('./routes/home/lib');
console.log('lib.nowDate :', lib.nowDate());
lib.hello();
