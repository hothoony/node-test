const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/login', (req, res) => {
    res.send('login page');
});

app.listen(3000, function() {
    console.log('server start');
});
