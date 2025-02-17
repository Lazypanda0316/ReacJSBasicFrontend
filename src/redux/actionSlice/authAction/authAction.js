import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const getProducts = createAsyncThunk(
  "auth/products",
  async (__, { rejectWithValue }) => {
    try {
      const response = await API.get("/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
