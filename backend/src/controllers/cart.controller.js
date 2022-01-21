const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

router.post("/",async(req,res)=>{
    const product = await Product.findById(req.body.id).lean().exec();
    Cart.save(product);
    console.log(Cart.getCart());
    // return res.render("cart.ejs",{user_cart: Cart.getCart()});
    // res.end("save Successfully");
});
router.get("/:id",async(req,res)=>{
    const cart = await Cart.findById(req.params.id).lean().exec();
    return res.status(500).send(cart);
})
router.delete("/:id",async(req,res)=>{
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(500).send(cart);
})
// router.post("/",async(req,res)=>{
//     try{
//         const product = await Product.find(req.body.id).lean().exec()
//         // const cart = await Cart.find().lean().exec();
//         // if (cart){
//         //     console.log(true, req.body.id);

//         // }else {
//         //     console.log(false,req.body.id);
//         // }
//         console.log({product: product});
//         return res.render("cart",{product: product});
//         // if (cart){
//         //     let product = await Product.find(req.body.id).lean().exec();
//         //     let prod = cart.user_cart.products;
//         //     let price = 0;
//         //     let quantity = 0;
//         //     for (let i=0; i<prod.length; i++){
//         //         price += prod[i].dprice;
//         //         quantity += prod[i].quantity;
//         //     }
//             // const ucart = await Cart.findByIdAndUpdate({_id: cart[0]._id},{
//             //     user_cart: {
//             //         products: [prod,...product],
//             //         total_price: price,
//             //         product_quantity: quantity,
//             //     }
//             // })
//             // console.log(product,prod,price,quantity);
//             // console.log(req.body.id);
//             // console.log({cart: ucart});
//             // return res.render("cart",{cart: ucart});
//         // }else {
//             // let product = await Product.find(req.body.id).lean().exec();
//             // cart = await Cart.create({
//             //     user_cart:{
//             //         products: [product],
//             //         product_quantity: product.quantity,
//             //         total_price: product.dprice,
//             //     }
//             // });
//             // console.log(req.body.id);
//             // console.log({cart: cart});
//             // return res.render("cart",{cart: cart});
//         // }
//     }catch(err){
//         return res.render({message: err.message});
//     }
// });


module.exports = router;