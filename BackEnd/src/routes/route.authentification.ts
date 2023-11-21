import * as express from 'express';
const router = express.Router();
const {RegisterAuth,LoginAuth,LogoutAuth,GetAuth}= require('../controllers/Auths.controller');
/* add Auth */
router.post('/Register',RegisterAuth);
/* find Auth */
router.post('/Login', LoginAuth);
router.post('/Logout',LogoutAuth);
router.get('/profile',GetAuth);
module.exports =router;