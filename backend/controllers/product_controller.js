import asyncHandler from 'express-async-handler'
import Product from '../Models/productModel.js'


// @desc: fetch all products
// @route: GET/api/products
// @access: public

const getProducts = asyncHandler( async (req, res) => {
    const products= await Product.find({})

    res.json(products);
})

// @desc: fetch a single  product
// @route: GET/api/product/:id
// @access: public
const getProductBYId = asyncHandler( async (req, res) => {
    const product= await Product.findById(req.params.id)

    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: 'Product not found'})
    }
})

export {
    getProducts,
    getProductBYId
}