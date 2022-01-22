const express = require('express');
const router = express.Router();
// const Cart = require('../models/cart.model');
// const Product = require('../models/product.model');

// router.post("/",async(req,res)=>{
//     const product = await Product.findById(req.body.id).lean().exec();
//     Cart.save(product);
//     console.log(Cart.getCart());
//     // return res.render("cart.ejs",{user_cart: Cart.getCart()});
//     // res.end("save Successfully");
// });
// router.get("/:id",async(req,res)=>{
//     const cart = await Cart.findById(req.params.id).lean().exec();
//     return res.status(500).send(cart);
// })
// router.delete("/:id",async(req,res)=>{
//     const cart = await Cart.findByIdAndDelete(req.params.id);
//     return res.status(500).send(cart);
// })
router.post("/addtocart",async(req, res) => {
    try{
        console.log(req.user);
        const cart = await req.user.addToCart(req.body.id);
        console.log(cart);
        return res.redirect("/cart");
    }catch(err){
        console.log({message: err.message})
    }
})

router.get("/cart",async(req,res)=>{
    try{
        const cart = await req.user.find().populate({path: "cart.items.product_id"}).lean().exec();
        return res.render("cart",{cart: cart});
    }catch(err){
        return res.status(500).end({message: err.message})
    }
})

router.delete("/deletecart",async(req, res) => {
    try{
        await req.user.removeFromCart(req.body.prodId)
    res.redirect("/cart");
    }catch(err){
        return res.status(500).end({message: err.message});
    }
})

module.exports = router;