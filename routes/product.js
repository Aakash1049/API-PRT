const express=require("express")
const Product=require("../models/product")
const bodyparser=require("body-parser")
const router=express.Router()

router.get("/getProductById/:productID",async(req,res)=>{
    try {

        let products= await Product.findOne({Product_id:req.params.productID})
        res.json(products)
    } catch (error) {
        res.json({error})
    }
})

router.get("/getProductsByType/:productType",async(req,res)=>{
    try {
        console.log(req.params.productType)
        let products= await Product.find({Product_type:req.params.productType})
        console.log(products)
        res.json(products)
    } catch (error) {
        res.json({error})
    }
})

router.post("/product",async(req,res)=>{
    try {
        let product=await Product.create({...req.body})
        res.json(product)
    } catch (error) {
        res.json({error})
    }
})

router.put("/product/:productName/:availableQuanity", async(req,res)=>{
    try {
        let products= await Product.updateOne({Product_name:req.params.productName},{$set:{Available_quantity:req.params.availableQuanity}})
        res.json(products)
    } catch (error) {
        res.json(error.message)
    }
})
module.exports= router