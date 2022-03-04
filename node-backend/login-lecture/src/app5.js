"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// view template
app.set('views', './src/views');
app.set('view engine', 'ejs');

// static resource
app.use(express.static(`${__dirname}/public`));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const home = require('./routes/index');
app.use('/', home);

const PORT = 3000;
app.listen(PORT, function() {
    console.log('server start');
});

module.exports = app;
