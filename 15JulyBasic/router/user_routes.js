// route for the apis 
const express = require('express')
const router = express.Router();
const {createUser,student,customer, signIn} = require('../controller/user_controller');
const { verifytoken } = require('../middleware/jwtAuth');

router.post("/signIn", signIn)
router.post("/create", createUser);
router.post("/std",student)
router.get("/get_customer", verifytoken, customer);
//router.get('/params',params);
// router.get("/getAllUser")
module.exports  = router 