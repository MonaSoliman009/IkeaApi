const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    items: [mongoose.Schema.ObjectId], // Array of items in the order
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }, // Customer information
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
    }
})

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel