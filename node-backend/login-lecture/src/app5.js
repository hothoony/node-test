"use strict";

const express = require('express');
const app = express();

// view path
app.set('views', './src/views');
// view template
app.set('view engine', 'ejs');
// static file path
app.use(express.static(`${__dirname}/public`));

const home = require('./routes/home/index');
app.use('/', home);

const PORT = 3000;
app.listen(PORT, function() {
    console.log('server start');
});

module.exports = app;
