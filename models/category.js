const mongoose = require('mongoose');
const validator = require('validator');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"you must provide name"],
        minLength:3,
        unique:true
    },
    photo:{
        type:String,
        // required:[true,"you must provide photo"],
        default:"https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
    },
    parent_id:{
        type: mongoose.Schema.ObjectId,
        default: null
    }
}) 

const categoryModel=mongoose.model('Category',categorySchema)

module.exports=categoryModel