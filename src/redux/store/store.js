import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice/authSlice"
import adminReducer from "../features/adminSlice/adminSlice"
import productReducer from "../features/productSlice/productSlice"


export const store= configureStore({
    reducer:{
        auth: authReducer,
        admin:adminReducer,
        product:productReducer,
    },
});
