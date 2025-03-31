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

  export const publicProductDetails = createAsyncThunk(
    "products/publicProductDetails",
    async (id, { rejectWithValue }) => {
      try {
        const response = await API.get(`/food-detail/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );