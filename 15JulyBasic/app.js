// main code for server 
const express = require('express');
const app = express();
const user_router = require('./router/user_routes');
// middleware 
app.use(express.json());

app.use("/user", user_router);
// app.use("/profile", profile_router);
// listen function to create a server 
app.listen(3000, ()=>{
    console.log("running")
})

// callback functions , promises 

// app.use("/")

// hello how are you gaurav 
