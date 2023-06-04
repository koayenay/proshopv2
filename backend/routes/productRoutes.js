import express from "express"
import products from "../data/products.js"
const router = express.Router()

// Route to get all products
router.get("/", async (req, res) => {
  res.json(products)
})

// Route to get a specific product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

export default router
