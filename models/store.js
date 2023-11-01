const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    coordinates: [Number],
    name: String,
    address: String,
    image:{
        type: String,
    },
    description:{
        type: String,
        required:false
    }
}) 

const storeModel=mongoose.model('Store',storeSchema)

module.exports=storeModel