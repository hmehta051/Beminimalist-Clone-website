const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    reviews: {type: Number, required: true},
    desc: {type: String, required: true},
    tprice: {type: Number, required: true},
    dprice: {type: Number, required: true},
    category: {type: String, required: true},
    url: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("product",productSchema);