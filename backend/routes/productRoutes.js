import express from "express"
// import products from "../data/products.js"
import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"
const router = express.Router()

// Route to get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// Route to get a specific product by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    }

    res.status(404).json({ message: "Product not found" })
    res.json(product)
  })
)

export default router
