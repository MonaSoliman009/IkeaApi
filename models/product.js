const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "you must provide a title"],
        minLength: 4,
        trim: true
    },
    price: {
        type: Number,
        required: [true, "you must provide a price"]
    },
    avgRating: {
        type: Number,
        default: 0
    },
    images: [String],
    details: {
        description: { type: String, required: true },
        designer: { type: String, required: true },
        articleNo: { type: String, required: true }
    },
    goodToKnow: { type: String, required: true },
    materials: {
        type: Schema.Types.Object
    },
    care: [{ type: Schema.Types.String }, { type: Schema.Types.Object }],
    safetyAndCompliance: {
        type: String,
        required: false
    },
    assemblyAndDocuments: {
        type: Schema.Types.Array,
        required: false
    },
    included: [{
        productId: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    measurments: {
        type: mongoose.Schema.Object,
        required: true
    },
    packing: {
        type: mongoose.Schema.Object,
        required: true
    },
    availableForDelivery:{
        type:Boolean,
        default:true
    },
    availableInStores:{
        availability:{
            type:Boolean,
            default:true
        },
        stores:[
            {
                storeId:mongoose.Schema.ObjectId,
                quantity:{type:Number},
                lastChecked:{
                    date:{
                        type:Date
                    },
                    time:{
                        type:Date
                    }
                }
            }
        ]
    }
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel