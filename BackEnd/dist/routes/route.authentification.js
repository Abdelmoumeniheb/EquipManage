"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var _a = require('../controllers/Auths.controller'), RegisterAuth = _a.RegisterAuth, LoginAuth = _a.LoginAuth, LogoutAuth = _a.LogoutAuth, GetAuth = _a.GetAuth;
/* add Auth */
router.post('/Register', RegisterAuth);
/* find Auth */
router.post('/Login', LoginAuth);
router.post('/Logout', LogoutAuth);
router.get('/profile', GetAuth);
module.exports = router;
