import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../api/api";

export const allProducts = createAsyncThunk(
    "/product/products",
    async (__, { rejectWithValue }) => {
      try {
        const response = await API.get("/all/food");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );