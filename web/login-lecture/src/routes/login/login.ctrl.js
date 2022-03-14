"use strict";

const get = {
    login: (req, res) => {
        console.log('get.login');
        res.render('login/login');
    },
};

const post = {
    login: (req, res) => {
        console.log('post.login');
        console.log(req.body);
        res.render('login/login');
    },
};

module.exports = {
    get,
    post,
}
