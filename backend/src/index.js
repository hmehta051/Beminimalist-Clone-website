const express = require('express');
const cors = require('cors');
const app = express();
const productController = require('./controllers/product.controller');
const viewscontroller = require('./controllers/views.controllers');
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
app.use(express.static("public"))
app.use("/products",productController);
app.use("/",viewscontroller);
module.exports = app;
