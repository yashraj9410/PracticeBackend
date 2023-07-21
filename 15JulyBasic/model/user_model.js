// model creates the schema for any entity e.g user 
// user , user_name , user_email_id , phone , password 
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userModel = new Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userModel);

// tasks 
// 1 - Mongo atlas connect krlena , new database banake , network property access to all ip .
// 2 - Add email , password , age property to the model .
// 3 - Read about mongoDb express functions .