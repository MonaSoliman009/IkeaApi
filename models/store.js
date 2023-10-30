const mongoose = require('mongoose');
const validator = require('validator');

const storeSchema = new mongoose.Schema({
    coordinates: [Number],
    name: String,
    address: String
}) 

const storeModel=mongoose.model('Store',storeSchema)

module.exports=storeModel