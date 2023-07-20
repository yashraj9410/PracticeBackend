// route for the apis 
const express = require('express')
const router = express.Router();
const {readUser, createUser,student,customer} = require('../controller/user_controller');

router.get("/getUser", readUser)
router.post("/create", createUser);
router.post("/std",student)
router.get("/create_customer",customer);
//router.get('/params',params);
// router.get("/getAllUser")
module.exports  = router 