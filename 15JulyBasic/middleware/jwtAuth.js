// token verification
const jwt = require('jsonwebtoken')
const express = require('express')

const verifytoken = (req, res) => {
    const token = req.headers['authorization'];  // headeers auth
    if(token){
        const userToken = token.split(' ')[1];
        const decodedToken = jwt.verify(userToken, 'secret1234');
        res.send(decodedToken)
    }
    // token storage format --> Bearer token
}

exports.verifytoken = verifytoken;

// authorization vs authentication --> status code 
// improve the above code 