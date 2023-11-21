"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var _a = require('../controllers/Employess.controller'), AddEmployess = _a.AddEmployess, FindAllEmployess = _a.FindAllEmployess, FindSinglEmployess = _a.FindSinglEmployess, FilterEmployess = _a.FilterEmployess, DeleteEmployess = _a.DeleteEmployess;
/* add Employes */
router.post('/Employess', AddEmployess);
/* find all Employes */
router.get('/Employess', FindAllEmployess);
/* find single Employes */
router.get('/Employess/:id', FindSinglEmployess);
/*filter Employes */
router.get('/Employess', FilterEmployess);
// /* Update Employes */
// router.put('/Employes/:id', UpdateEmployess)
/* delete Employes */
router.delete('/Employess/:id', DeleteEmployess);
module.exports = router;
