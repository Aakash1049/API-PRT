const mongoose=require("mongoose")
const Schema=mongoose.Schema
const CustomerSchema= new Schema({
   Customer_id:String,
   Customer_name:String,
   Email:{
    type:String,
    unique:true
   },
   Balance:Number
})

const CustomerModel=mongoose.model("customers",CustomerSchema)
module.exports=CustomerModel