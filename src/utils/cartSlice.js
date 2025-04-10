import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemsToCart(state, action) {
      state.items.push(action.payload);
    },
    removeItemsFromCart(state, action) {
      state.items.pop(action.payload);
    },
  },
})