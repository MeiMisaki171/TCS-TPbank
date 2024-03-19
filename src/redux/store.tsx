import { configureStore } from "@reduxjs/toolkit";
import danhmucReducer from "../redux/danhmucSlice";

export const store = configureStore({
    reducer: {
        danhmuc: danhmucReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;