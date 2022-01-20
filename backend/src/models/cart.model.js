const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    category: {type: String, required: true},
    desc: {type: String, required: true},
    dprice: {type: Number, required: true},
    tprice: {type: Number, required: true},
    quantity: {type: String, required: true},
    reviews: {type: Number, required: true},
    url: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("cart",cartSchema);