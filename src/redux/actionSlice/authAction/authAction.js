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

export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ registerValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/register", registerValue);
      toast.success(response.data.message || "Register create successFully!");
      navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ loginValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", loginValue);
      toast.success(response.data.message || "Logged in successFully!");
      navigate("/spare-parts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
