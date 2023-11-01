const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    list:[{
      name:{
        type: String,
        required: [true, "firstName is required"]
      },
      productIds:[mongoose.Schema.ObjectId]
    }],
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
}) 

const wishlistModel=mongoose.model('Cart',wishlistSchema)

module.exports=wishlistModel