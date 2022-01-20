const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const productController = require('./controllers/product.controller');
const homecontroller = require('./controllers/views.controllers');
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.use(express.static("public"))
app.use("/products",productController);
app.use("/",homecontroller);
module.exports = app;
