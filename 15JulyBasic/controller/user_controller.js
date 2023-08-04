// controller mainly deals with the creation of apis and functions for database operations
const jwt = require('jsonwebtoken')
const userModel = require('../model/user_model')

const registeruser = async(req, res) => {
    const userData = {"name":"yash","email":"yash@yash.com", "password":"yash1234"};
    await userModel.create(userData)
    .then(data => res.status(200).send("User Registered"))
    .catch(error => res.send(error))
}

const signIn = (req,res) => {
    const userData = {"name":"yash","email":"yash@yash.com", "id":"yash1234"}; // request recieved
    if(userData){
        const token = jwt.sign(userData, 'secret1234', {expiresIn: '30m'})
        res.status(200).json({token});
    } else {
        res.status(400).json({error:"Bad Request"})
    }
}

// post request 
const createUser = (req,res) => {
    const user_data = req.body;
    if(Object.keys(user_data).length ==0){
        return res.status(400).send("Bad Request");
    }
    res.send(user_data);
}
// req  params
//  const params = (req,res)=>{
//          const id = req.params.id;
//          res.send("hiii");
//          }
// express validator library is used to check reqbody 
const student =(req,res)=>{
    const student_data=req.body;
    if(Object.keys(student_data).length==0){
        return res.status(400).send('bad');
    }else{
        res.status(200).send(req.body);
    }
}
const customer = (req ,res)=>{
    const customer_data = {
        "name":"yash",
        "vgame":"cricket",
        "mdkd":"cdnu"
         }
         if(Object.keys(customer_data).length==0){
             res.status(400).send('bad');
        }else{
            res.status(200).json({customer_data});
        } 
}

// mongo function
const getName = async(req,res) => {
}

exports.signIn    = signIn;
exports.createUser  = createUser;
exports.student  = student;
exports.customer = customer ;
exports.registeruser= registeruser;
//exports.params    = params;



// http status codes 
// 200 - successfull OK 
// 404 - NOt Found 
// 201 - created
// 401 - unauthenticated
// export import in javascript 
// get post put delete methods 