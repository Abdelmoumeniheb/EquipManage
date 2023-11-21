import * as express from 'express';
const router = express.Router();
const {AddEmployess,FindAllEmployess, FindSinglEmployess,FilterEmployess,DeleteEmployess}= require('../controllers/Employess.controller');
/* add Employes */
router.post('/Employess',AddEmployess);
/* find all Employes */
router.get('/Employess',FindAllEmployess);
/* find single Employes */
router.get('/Employess/:id', FindSinglEmployess);
/*filter Employes */
router.get('/Employess', FilterEmployess);
// /* Update Employes */
// router.put('/Employes/:id', UpdateEmployess)
/* delete Employes */
router.delete( '/Employess/:id', DeleteEmployess)

module.exports =router;