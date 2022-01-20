const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// router.get("/", async (req, res) => {
//     try {
//         let products,totalPages
//         //console.log(path.join(__dirname,"../uploads"))
//         const page=+req.query.page||1;
//         const size=+req.query.size||10;
//         const skip=(page-1)*size;
//         let search=req.query.category;

//         if(!search){
//             products=await Product.find().skip(skip).limit(size).lean().exec();
//             totalPages=Math.ceil((await Product.find().countDocuments())/size)
//         }else{
//             products = await Product.find({category:search}).skip(skip).limit(size).lean().exec();
//             totalPages=Math.ceil((await Product.find().countDocuments())/size)
//         }
//         console.log(products);
//         return res.status(201).render("products",{
//             products,totalPages
//         });
//     } catch (err) {
//         return res.status(500).send(err.message)
//     }
// });
router.get("/:id", async (req, res) => {
    try {
        const products=await Product.findById(req.params.id).lean().exec();
            return res.status(201).render("singleproduct.ejs",{products: products});
    } catch (err) {
        return res.status(500).send(err.message)
    }
});
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().lean().exec();
        //return res.status(201).send(products);
        console.log(products);
            return res.status(201).render("product",{products: products});
    } catch (err) {
        return res.status(500).send(err.message)
    }
});

module.exports = router;