const jwt = require('jsonwebtoken');
const expree = require('express');


const verifyProduct = (req,res)=>{
     const token = req.headers['authorization'];
     if(token){
        const  prdtToken = token.split(' ')[1];
        const decodedToken = jwt.verify(prdtToken,'product1234')
        res.send(decodedToken);
     }
    
}
exports.verifyProduct = verifyProduct ;