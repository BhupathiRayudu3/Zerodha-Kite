//we take model from mongoose ,alert that m should be small letter
const {model}=require('mongoose');
const{HoldingsSchema}= require('../schemas/HoldingsSchema');
//in this line will create a model ,here for the modle we pass to params one is collection name which will be rendered as plural i.e holding => will be named as holdings in the collection name and the next param is Schema
const HoldingsModel=new model("holding",HoldingsSchema);
module.exports={HoldingsModel}