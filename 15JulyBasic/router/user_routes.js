// route for the apis 
const express = require('express')
const router = express.Router();
const {readUser, createUser} = require('../controller/user_controller');

router.get("/getUser", readUser)
router.post("/create", createUser);
// router.get("/getAllUser")
module.exports  = router 