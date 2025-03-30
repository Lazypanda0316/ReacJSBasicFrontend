import { createSlice } from "@reduxjs/toolkit";
import { addProduct, allProducts, deleteProductAction, singleProduct } from "../../actionSlice/adminAction/adminAction";


const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isLoading: false,
    loading:false,
    isEror:"",
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
    .addCase(singleProduct.pending,(state)=>{
      state.isLoading = true
    })
    .addCase(singleProduct.fulfilled,(state,action)=>{
      state.isLoading = false
      state.product = action.payload.data
    })
    .addCase(singleProduct.rejected,(state,action)=>{
      state.isLoading = false
      state.error = action.payload.message
    })
    .addCase(deleteProductAction.pending,(state)=>{
      state.loading = true
    })
    .addCase(deleteProductAction.fulfilled,(state,action)=>{
      state.loading = false
      const {arg:{id}} = action.meta
      if(id){
        state.products = state.products.filter((item)=>item._id !==id)
      }
      state.product = action.payload.data
    })
    .addCase(deleteProductAction.rejected,(state,action)=>{
      state.loading = false
      state.isEror = action.payload.message
    })
    
  
  },
});
export const { setAdminClearError } = adminSlice.actions;
export default adminSlice.reducer;
