// route for the apis 
const express = require('express')
const router = express.Router();
<<<<<<< HEAD
const {readUser, createUser,student,customer,} = require('../controller/user_controller');
=======
const {createUser,student,customer, signIn} = require('../controller/user_controller');
const { verifytoken } = require('../middleware/jwtAuth');
>>>>>>> ebbec7e968a1550b5fff14220e201a206ae35e6d

router.post("/signIn", signIn)
router.post("/create", createUser);
router.post("/std",student)
router.get("/get_customer", verifytoken, customer);
//router.get('/params',params);
// router.get("/getAllUser")
module.exports  = router 