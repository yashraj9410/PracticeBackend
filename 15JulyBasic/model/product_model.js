const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

// defining the schema of the model and its attributes according to the mongoose
const productModel = new Schema({
   name:{
      type: String ,
      required: true,
      unique : false
   },
   price:{
    type:Number,
    required: true,
   }
   })

   module.exports = mongoose.model("product",productModel);