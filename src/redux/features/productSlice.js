import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: data ? data.products : null,
  },
});

export default productSlice.reducer;
