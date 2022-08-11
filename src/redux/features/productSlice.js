import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

console.log(data.products);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data.products,
    sizeFilter: "ALL",
    sortFilter: "lowest",
  },
  reducers: {
    filterBySize: (state, action) => {
      const size = action.payload;
      state.products = data.products.filter((product) =>
        product.availableSizes.includes(size)
      );
    },
    setSizeFilter: (state, action) => {
      state.sizeFilter = action.payload;
    },
    setSortFilter: (state, action) => {
      state.sortFilter = action.payload;
    },
  },
});

export const { filterBySize, setSizeFilter, setSortFilter } =
  productSlice.actions;
export default productSlice.reducer;
