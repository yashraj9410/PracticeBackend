// route for the apis 
const express = require('express')
const router = express.Router();
const {readUser} = require('../controller/user_controller');

router.get("/getUser", readUser)
// router.get("/getAllUser")

module.exports  = router 