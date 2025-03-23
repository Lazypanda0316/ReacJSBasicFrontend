import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const addProduct = createAsyncThunk(
  "admin/addProduct",
  async ({ formData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/add/food", formData);
      toast.success(response.data.message || "Food Added Successfully");
      navigate("/admin-dashboard/all-mail");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const allProducts = createAsyncThunk(
    "admin/products",
    async (__, { rejectWithValue }) => {
      try {
        const response = await API.get("/all/food");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
