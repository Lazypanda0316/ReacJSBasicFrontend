import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProfile, userLogin, userRegister } from "../../actionSlice/authAction/authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: "",
    message: "",
    user: null,
    products: [],
    isAuthenticated: false,
  },
  reducers: {
    setLogout: (state) => {
      state.error = null;
      state.user = null;
      localStorage.clear();
    },
    setClearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "An error occured";
      })
      .addCase(userRegister.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(userRegister.fulfilled,(state,action)=>{
        state.isLoading = false
        state.user = action.payload
      })
      .addCase(userRegister.rejected,(state,action)=>{
        state.isLoading = false
        state.error = action.payload.message || "An Error Occured";
      })
      .addCase(userLogin.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(userLogin.fulfilled,(state,action)=>{
        state.isLoading = false
        state.user = action.payload.data
        localStorage.setItem("user",JSON.stringify(action.payload.data))
        const {token} = action.payload
        localStorage.setItem("AccessToken",token)

      })
      .addCase(userLogin.rejected,(state,action)=>{
        state.isLoading = false
        state.error = action.payload.message || "An Error Occured";
        
      })

      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "An error occured";
      })
  },
});
export const { setClearError,setLogout } = authSlice.actions;
export default authSlice.reducer;
