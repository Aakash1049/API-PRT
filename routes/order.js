const express=require("express")
const Order=require("../models/order")
const Customer=require("../models/customer")
const Product=require("../models/product")

const bodyparser=require("body-parser")
const router=express.Router()

router.post("/orders", async(req,res)=>{
    try {
        let custmer= await Customer.findOne({Customer_id:req.body.Customer_id})
        let product= await Product.findOne({Product_id:req.body.Product_id})
        let product_price= product.Product_price
        if(req.body.Quantity>product.Available_quantity){
            return res.json({message:"Out Of Stock"})
        }
        if((product_price*req.body.Quantity)>custmer.Balance){
            return res.json({message:"Insufficient Balance"})
        }
        product.Available_quantity= ( product.Available_quantity - req.body.Quantity)
        await product.save()
        custmer.Balance= custmer.Balance - (product_price*req.body.Quantity)
        await custmer.save()
        let order=await Order.create({...req.body})
        res.json(order)
    } catch (error) {
        res.json({error})
    }
})

router.get("/orders/:orderID",async(req,res)=>{
    try {

        let order= await Order.findOne({_id:req.params.orderID})
        res.json(order)
    } catch (error) {
        res.json({error})
    }
})


module.exports= router