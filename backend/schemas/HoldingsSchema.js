//Schema is a class in mongoose 
//we can write multiple schemas in a single file,but for good representation we use separate files
const {Schema}=require('mongoose');

const HoldingsSchema=new Schema({
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,

})
module.exports ={HoldingsSchema};