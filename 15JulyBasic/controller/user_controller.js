// controller mainly deals with the creation of apis and functions for database operations
const readUser = (req,res) => {
    const userData = {"name":"yash","email":"yash@yash.com"}; // request recieved
    if(userData){
        res.status(200).json({userData});
    } else {
        res.status(400).json({error:"Bad Request"})
    }
}

exports.readUser  = readUser;

// http status codes 
// 200 - successfull OK 
// 404 - NOt Found 
// 201 - created
// 401 - unauthenticated
// export import in javascript 
// get post put delete methods 