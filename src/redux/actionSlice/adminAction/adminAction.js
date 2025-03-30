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


  export const updateProduct = createAsyncThunk(
    "admin/updateProduct",
    async (__, { rejectWithValue }) => {
      try {
        const response = await API.put("/update/profile");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  //get singleProduct by id
  export const singleProduct = createAsyncThunk(
    "admin/singleProduct",
    async (id, { rejectWithValue }) => {
      try {
        const response = await API.get(`/food/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  //deleteAction

  export const deleteProductAction = createAsyncThunk(
    "admin/deleteProductAction",
    async ({id,toast}, { rejectWithValue }) => {
      try {
        const response = await API.delete(`/food/${id}`);
        toast.success(response.data.message || "product deleted successFully!")
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

