"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var _a = require('../controllers/Equis.controller'), AddEqui = _a.AddEqui, FindAllEquis = _a.FindAllEquis, FindSinglEqui = _a.FindSinglEqui, FilterEquis = _a.FilterEquis, DeleteEqui = _a.DeleteEqui;
/* add user */
router.post('/Equis', AddEqui);
/* find all users */
// router.get('/Equis',FindAllEquis);
/* find single user */
router.get('/Equis/:id', FindSinglEqui);
/*filter users */
router.get('/Equis', FilterEquis);
// /* Update user */
// // router.put('/Equis/:id', UpdateEqui)
/* delete user */
router.delete('/Equis/:id', DeleteEqui);
// module.exports =router;
module.exports = router;
