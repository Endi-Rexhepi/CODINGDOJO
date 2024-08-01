const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title name is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: { 
        type: Number,
        min: [1, "The price must be at least 1$ or more"],
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, 
{ timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;