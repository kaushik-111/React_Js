import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "../app/Slice";

export const store = configureStore({
    reducer:{
        ApiKey:apiSlice,
    }
})