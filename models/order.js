const mongoose=require("mongoose")
const Schema=mongoose.Schema
const OrderSchema= new Schema({
    Customer_id:String,
    Product_id:String,
    Product_name:String,
    Quantity:Number
})

const OrderModel=mongoose.model("orders",OrderSchema)
module.exports=OrderModel