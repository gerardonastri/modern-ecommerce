import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
    },
    buttonText: {
        type: String,
        default: 'Shop Now'
    },
    description: {
        type: String,
    },
    smallText: {
        type: String
    },
    midText: {
        type: String
    },
    largeText: {
        type: String
    },
    largeText2: {
        type: String
    },
    discount: {
        type: Number
    },
    saletime: {
        type: String
    }
 }, {timestamps: true})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)