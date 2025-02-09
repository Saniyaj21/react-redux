import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            quantity: 1
        }
    ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      console.log("added to cart");
      
    },
    removeFromCart: (state) => {
      console.log("removed from cart");
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer