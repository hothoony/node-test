"use strict";

const express = require('express');
const app = express();

// view
app.set('views', './views');
app.set('view engine', 'ejs');

const home = require('./routes/home/index');
app.use('/', home);

// const PORT = 3000;
// app.listen(PORT, function() {
//     console.log('server start');
// });

module.exports = app;
