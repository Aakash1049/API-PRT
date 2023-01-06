const express=require("express")
const Customer=require("../models/customer")
const bodyparser=require("body-parser")
const router=express.Router()

router.get("/customers/:customerID",async(req,res)=>{
    try {
        let customer= await Customer.findOne({Customer_id:req.params.customerID})
        res.json(customer)
    } catch (error) {
        res.json({error})
    }
})

router.post("/customer",async(req,res)=>{
    try {
        let customer=await Customer.create({...req.body})
        res.json(customer)
    } catch (error) {
        res.json({error})
    }
})
router.put("/customer/:email/:costOfAnOrder", async(req,res)=>{
    try {
        let customer= await Customer.findOne({Email:req.params.email})
        let UpdatedCustomer= await Customer.updateOne({Email:req.params.email},{$set:{Balance:customer.Balance-req.params.costOfAnOrder}})
        res.json(UpdatedCustomer)
    } catch (error) {
        res.json(error.message)
    }
})

router.get("/customer/getBalance/:email",async(req,res)=>{
    try {
        let customer= await Customer.findOne({Email:req.params.email})
        res.json({
            Balance: customer.Balance
        })
    } catch (error) {
        res.json(error.message)   
    }
})

module.exports= router