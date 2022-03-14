"use strict";

const express =  require('express');
const router = express.Router();

const home_ctrl = require('./home/home.ctrl');
const login_ctrl = require('./login/login.ctrl');

router.get('/', home_ctrl.index);
router.get('/login', login_ctrl.get.login);
router.post('/login', login_ctrl.post.login);

module.exports = router;
