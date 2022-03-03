"use strict";

const express =  require('express');
const router = express.Router();

const home_ctrl = require('./home.ctrl');

router.get('/', home_ctrl.hello);
router.get('/login', home_ctrl.login);
router.post('/login', home_ctrl.login);

module.exports = router;
