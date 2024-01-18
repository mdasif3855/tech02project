const express = require('express');
const {Loginuser,Signupuser} = require('../Controllers/UserController')
const router = express.Router();

//login
router.post('/login',Loginuser)

//signup
router.post('/signup',Signupuser)
module.exports = router