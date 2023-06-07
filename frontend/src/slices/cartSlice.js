import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] }

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload

      const existItem = state.cartItems.find((x) => x._id === item.__id)

      if (existItem) {
        // If an existing item is found in the cart
        // Update the state by mapping through the cart items
        // If the current item matches the existing item, replace it with the updated item
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        )
      } else {
        // If the item doesn't exist in the cart
        // Update the state by creating a new array with the existing cart items and the new item added
        state.cartItems = [...state.cartItems, item]
      }

      // Calculate items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)

      localStorage.setItem("cart", JSON.stringify(state))
    },
  },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
