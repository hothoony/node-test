const mongoose = require('mongoose');

// const dbURI = 'mongodb://myuser:test1234@localhost:27017/mydb?retryWrites=true&w=majority';
// // const dbURI = 'mongodb://myuser:test1234@localhost:27071/mydb?retryWrites=true&w=majority';
// mongoose.connect(dbURI)
// // mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         console.log('connected to db!!', result);
//     })
//     .catch(err => {
//         console.error(err);
//     });

mongoose.connect('mongodb://myuser:test1234@localhost:27017/admin?retryWrites=true&w=majority', {
    dbName: 'mydb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(result => {
    console.log('connected to db');
    console.log(result);
})
.catch(err => {
    console.log('error occured');
    console.error(err)
});
