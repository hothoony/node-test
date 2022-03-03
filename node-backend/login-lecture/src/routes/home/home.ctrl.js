"use strict";

const hello = (req, res) => {
    res.render('home/index')
};

const get = {
    login: (req, res) => {
        console.log('get.login');
        res.render('home/login');
    },
};

const post = {
    login: (req, res) => {
        console.log('post.login');
        console.log(req.body);
        res.render('home/login');
    },
};

module.exports = {
    hello,
    get,
    post,
}
