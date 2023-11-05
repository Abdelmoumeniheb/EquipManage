const express = require('express');
const router = express.Router();
const {AddEqui,FindAllEquis, FindSinglEqui, FilterEquis,DeleteEqui} = require('../controllers/Equis.controller');
/* add user */
router.post('/Equis',  AddEqui);
/* find all users */
// router.get('/Equis',FindAllEquis);
/* find single user */
router.get('/Equis/:id', FindSinglEqui);
/*filter users */
router.get('/Equis', FilterEquis);
// /* Update user */
// // router.put('/Equis/:id', UpdateEqui)

/* delete user */
router.delete( '/Equis/:id', DeleteEqui)


// module.exports =router;
module.exports =router;