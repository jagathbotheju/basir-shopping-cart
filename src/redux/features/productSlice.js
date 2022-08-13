import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const mcartItems = JSON.parse(localStorage.getItem("cartItems"));

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data.products,
    sizeFilter: "ALL",
    sortFilter: "lowest",
    cartItems: mcartItems ? mcartItems : [],
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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
