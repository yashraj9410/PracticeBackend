// main code for server 
const express = require('express');
const app = express();
const user_router = require('./router/user_routes');
const db = require('./model/db');

//const params = require('./router/user_routes');
// middleware 
app.use(express.json());
app.use("/user", user_router);
// app.use("/profile", profile_router);
//app.use('/:id',params)
// listen function to create a server 
app.listen(4000, ()=>{
    console.log("running")
})
                              
// callback functions , promises                                                                                                                                    
                       
// app.use("/")                                                                                                                      


