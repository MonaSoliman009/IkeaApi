const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"]
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"]
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    preferedStore: {
        type: mongoose.Schema.ObjectId,
        ref: 'Store'
    },
    addresses: [{
        fullName: {
            type: String,
            required: [true, 'Please provide fullName'],
        },
        StreetNameAndNumber: {
            type: String,
            required: [true, 'Please provide Street name and number'],
        },
        BuildingNameFlatNo: {
            type: String,
            required: false
        },
        Governorate: {
            type: String,
            required: false
        },
        Area: {
            type: String,
            required: false
        }
    }]
})



const User = mongoose.model('User', userSchema);

module.exports = User;