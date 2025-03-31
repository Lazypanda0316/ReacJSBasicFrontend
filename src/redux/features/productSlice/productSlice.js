import { createSlice } from "@reduxjs/toolkit";
import { allProducts, publicProductDetails,  } from "./productAction/productAction";

const productSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    loading: false,
    isError: "",
    error: "",
    message: "",
    product: null,
    products: [],
  },
  reducers: {
    setProductClearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(publicProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(publicProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload.data;
      })
      .addCase(publicProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});
export const { setProductClearError } = productSlice.actions;
export default productSlice.reducer;
