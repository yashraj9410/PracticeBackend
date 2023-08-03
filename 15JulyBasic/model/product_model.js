const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

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