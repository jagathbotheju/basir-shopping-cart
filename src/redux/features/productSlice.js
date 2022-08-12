import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

console.log(data.products);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data.products,
    sizeFilter: "ALL",
    sortFilter: "lowest",
    cartItems: [],
  },
  reducers: {
    setSizeFilter: (state, action) => {
      state.sizeFilter = action.payload;
    },
    setSortFilter: (state, action) => {
      state.sortFilter = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartItems.push(newItem);
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = newCartItems;
    },
  },
});

export const {
  filterBySize,
  setSizeFilter,
  setSortFilter,
  addToCart,
  removeFromCart,
} = productSlice.actions;
export default productSlice.reducer;
