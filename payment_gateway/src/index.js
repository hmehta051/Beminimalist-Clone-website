const express = require("express");
const app = express()
const path = require("path");
const Razorpay = require("razorpay");
require("dotenv").config()
let orderIdavar;

const razorpay = new Razorpay({
    key_id:process.env.keyId,
    key_secret:process.env.key_secret
})
console.log(razorpay)

app.set(`views`,path.join(__dirname,`./views`))
app.set(`view engine`,`ejs`);
app.use(express.urlencoded({extended:false}));

app.get("",async(req,res)=>{
    res.render(`razorpay.ejs`)
})
app.post("/order",(req,res) =>{

    
    let options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      }

      razorpay.orders.create(options,function(err,order){
        orderIdavar = order.id
          res.json(order) //order sent
      })

})

app.post("/ordercompleted",(req,res)=>{
    razorpay.payments.fetch(req.body.razorpay_payment_id).then((paymentDocument)=>{
        console.log(paymentDocument)
        if(paymentDocument.status == `captured`) return res.send(`payment successfull `)

        else return  res.send(`payment Failed`)
    })
})
module.exports = app;