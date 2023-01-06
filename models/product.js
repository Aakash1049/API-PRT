const mongoose=require("mongoose")
const Schema=mongoose.Schema
const ProductSchema= new Schema({
    Product_id:String,
    Product_type:String,
    Product_name:String,
    Available_quantity:Number,
    Product_price:Number
})

const ProductModel=mongoose.model("products",ProductSchema)
module.exports=ProductModel