import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

// @desc Fetch all products
// @route GET /api/products
// accesss Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch a product
// @route GET /api/products/:id
// accesss Public
const getProductById = asyncHandler(async (req, res) => {
  //   const product = products.find((p) => p._id === req.params.id)
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.staus(404)
    throw new Error("Resource not found")
  }
})

export {getProducts,getProductById}