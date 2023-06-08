import mongoose from "mongoose";

const sellerSchema=new mongoose.Schema({
    email:String,
    businessName:String,
    password:String
})

const Seller = mongoose.model('seller',sellerSchema)

export default Seller