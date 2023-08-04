// main code for server 
const express = require('express');
const app = express();
const user_router = require('./router/user_routes');
const mongoose = require('mongoose')

//const params = require('./router/user_routes');
// middleware 
app.use(express.json());
app.use("/user", user_router);
// app.use("/profile", profile_router);
//app.use('/:id',params)
// listen function to create a server 

mongoose.connect("mongodb+srv://yashGaurav:1234@cluster0.c6ik7vg.mongodb.net/")
.then(()=> {
    app.listen(4001, ()=>{
        console.log("databse connected , server running")
    })
})
                
// callback functions , promises                                                                                                                                    
                       
// app.use("/")                                                                                                                      


// dummy project 
// create token only if user is registered in the databse .