import mongoose from 'mongoose'

const BannerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String,
    },
   price: {
       type: Number
   },
   details: {
       type: String
   }
 }, {timestamps: true})

export default mongoose.models.Banner || mongoose.model('Banner', BannerSchema)