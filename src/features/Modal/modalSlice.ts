import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
    show: boolean;
}

const initialState: ModalState = {
    show: false,
}

export const modalSlide = createSlice({
    name: 'showModal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.show = true;
        },
        hideModal: (state) => {
            state.show = false;
        }
    }
})

export const { showModal, hideModal } = modalSlide.actions;

export default modalSlide.reducer;