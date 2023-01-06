const express= require("express")
const mongodb= require("mongodb")
const mongoose= require("mongoose")
const app= express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/API_PRT_TEST").then(()=>{
    console.log("Connected to database")
})

const customer=require("./routes/customer")
app.use(customer)
const order=require("./routes/order")
app.use(order)
const product=require("./routes/product")
app.use(product)

app.listen(3000,()=>{
    console.log("server is listening at port 3000")
})