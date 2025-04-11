import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // vanilla (older) Redux ==> DON'T MUTATE STATE
      // const newState = [...state.items];
      // newState.items.push(action.payload);
      // return newState

      // but in Redux Toolkit, we can mutate the state directly
      // we actually have to mutate the state
      
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer