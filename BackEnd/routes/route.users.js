const express = require('express');
const router = express.Router();
const {AddUser,FindAllUsers, FindSinglUser,FilterUsers,DeleteUser}= require('../controllers/users.controller');
/* add user */
router.post('/users',AddUser);
/* find all users */
// router.get('/users',FindAllUsers);
/* find single user */
router.get('/users/:id', FindSinglUser);
/*filter users */
router.get('/users', FilterUsers);
// /* Update user */
// router.put('/users/:id', UpdateUser)
/* delete user */
router.delete( '/users/:id', DeleteUser)

module.exports =router;