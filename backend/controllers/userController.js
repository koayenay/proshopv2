import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"

// @desc Auth user & get token
// @route POST /api/users/login
// accesss Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user")
})

// @desc Register user & get token
// @route POST /api/users
// accesss Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user")
})

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// accesss Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user")
})

// @desc Get user profile
// @route GET /api/users/profile
// accesss Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile")
})

// @desc Update user profile
// @route PUT /api/users
// accesss Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile")
})

// @desc Get users
// @route GET /api/users
// accesss Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get user")
})

// @desc Get user by ID
// @route GET /api/users/:id
// accesss Private/Admin
const getUsersById = asyncHandler(async (req, res) => {
  res.send("get user by ID")
})

// @desc Delete user
// @route DELETE /api/users/:id
// accesss Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user")
})

// @desc Update user
// @route PUT /api/users/:id
// accesss Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user")
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersById,
  updateUser,
}
