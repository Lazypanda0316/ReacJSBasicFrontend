import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../actionSlice/authAction/authAction";

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
  reducer: {
    setLogin: (state) => {
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
      });
  },
});
export const { setClearError, setLogin } = authSlice.actions;
export default authSlice.reducer;
