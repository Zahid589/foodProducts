import mongoose from "mongoose";

const prodSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    stock: Number
})

const Products = mongoose.model('Products', prodSchema)

export default Products