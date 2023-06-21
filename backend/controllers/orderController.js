import asyncHandler from "../middleware/asyncHandler.js"
import Order from "../models/orderModel.js"

// @desc Create new order
// @route POST /api/orders
// accesss Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order item")
})

// @desc Get Logged In user orders
// @route GET /api/orders
// accesss Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders")
})

// @desc Get Order by ID
// @route GET /api/orders/:id
// accesss Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id")
})

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// accesss Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid")
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered")
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders")
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
}
