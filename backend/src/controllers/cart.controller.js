const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model');

router.post("/postcart",async(req,res)=>{
    try{
        const cart = await Cart.create(req.body);
        return res.status(201).send({cartitems: cart});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});
router.get("/postcart",async(req,res)=>{
    try{
        const cart = await Cart.find().lean().exec();
        return res.status(201).send({cartitems: cart});
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});
module.exports = router;