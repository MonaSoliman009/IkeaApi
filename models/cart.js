const mongoose = require('mongoose');
const validator = require('validator');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
}) 

const cartModel=mongoose.model('Cart',cartSchema)

module.exports=cartModel