import { configureStore } from "@reduxjs/toolkit";
import danhmucReducer from "../features/DM/MaChuong/dmMaChuongSlice";
import modalReducer from '../features/Modal/modalSlice'

export const store = configureStore({
    reducer: {
        danhmuc: danhmucReducer,
        modal: modalReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;