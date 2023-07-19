// controller mainly deals with the creation of apis and functions for database operations
const readUser = (req,res) => {
    const userData = {"name":"yash","email":"yash@yash.com"}; // request recieved
    if(userData){
        res.status(200).json({userData});
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

// express validator library is used to check reqbody 

exports.readUser  = readUser;
exports.createUser = createUser
// http status codes 
// 200 - successfull OK 
// 404 - NOt Found 
// 201 - created
// 401 - unauthenticated
// export import in javascript 
// get post put delete methods 