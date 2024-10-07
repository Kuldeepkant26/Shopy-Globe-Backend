const express = require('express');

const router = express.Router();
const { signupController, getuserController, loginController } = require('../controlers/authController')
// Signup Route
router.post('/signup', signupController);
//Get user
router.get('/getuser', getuserController);

//Login
router.post('/login', loginController)

module.exports = router;
