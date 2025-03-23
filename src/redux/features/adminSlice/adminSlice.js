import { createSlice } from "@reduxjs/toolkit";
import { addProduct, allProducts } from "../../actionSlice/adminAction/adminAction";


const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    error: "",
    message: "",
    product: null,
    products: [],
  },
  reducers: {
    setAdminClearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(addProduct.pending,(state)=>{
        state.isLoading = true
    })
    .addCase(addProduct.fulfilled,(state,action)=>{
        state.isLoading = false
        state.product = action.payload;
    })
    .addCase(addProduct.rejected,(state,action)=>{
        state.isLoading = false
        state.error = action.payload.message
    })
    .addCase(allProducts.pending,(state)=>{
        state.isLoading = true
    })
    .addCase(allProducts.fulfilled,(state,action)=>{
        state.isLoading = false
        state.products = action.payload.data;
    })
    .addCase(allProducts.rejected,(state,action)=>{
        state.isLoading = false
        state.error = action.payload.message
    })
  },
});
export const { setAdminClearError } = adminSlice.actions;
export default adminSlice.reducer;
