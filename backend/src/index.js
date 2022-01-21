
const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('./configs/passport');
const productController = require('./controllers/product.controller');
const viewscontroller = require('./controllers/views.controllers');
const cartController = require('./controllers/cart.controller');
const signupcontroller = require("./controllers/signupcontroller");
const logincontroller=require("./controllers/logincontroller");
const blogController = require('./controllers/blogcontroller');
const articleController = require('./controllers/article.controller');
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}));
// app.use( bodyParser.urlencoded({extended : true }));
// app.use( bodyParser.json() 
app.set("view engine","ejs")
app.use(express.static("public"))
app.use("/knowledge",blogController);
app.use("/viewmore",articleController);
app.use("/products",productController);
app.use("/signup", signupcontroller);
app.use("/login",logincontroller);
app.use("/addtocart",cartController);
app.use("/",viewscontroller);

//-------passport---------
app.use(passport.initialize());

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (user, callback) {
    callback(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure"
  }),
  (req, res) => {
    return res.status(201).json({ user: req.user.user, token: req.user.token });
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failure");
});
module.exports = app;
