import { configureStore } from "@reduxjs/toolkit";
import danhmucReducer from "../features/DM/MaChuong/dmMaChuongSlice";

export const store = configureStore({
    reducer: {
        danhmuc: danhmucReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;