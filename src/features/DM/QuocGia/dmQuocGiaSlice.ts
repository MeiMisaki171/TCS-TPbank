import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import DMQuocGiaService from '~/features/DM/QuocGia/DMQuocGia.service'
import { dataTable } from '~/types/DM/quocGia'

interface danhmucState {
    data: dataTable[],
    loading: boolean,
    error: string | null
}

const initialState: danhmucState = {
    data: [],
    loading: false,
    error: ''
}

export const getAllDMQuocGia = createAsyncThunk(
    "danhmuc",
    async () => {
        try {
            const res = await DMQuocGiaService.getAll();
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const deleteById = createAsyncThunk(
    "danhmuc/delete",
    async (maQG: string) => {
        try {
            const res = await DMQuocGiaService.deleteById(maQG)
            console.log(maQG)
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const danhmucSlice = createSlice({
    name: 'danhmuc',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllDMQuocGia.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllDMQuocGia.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
                console.log('isFullfilled')
            })
            .addCase(getAllDMQuocGia.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
                state.data = [];
                console.log('isReject')
            })
            .addCase(deleteById.pending, (state) => {
                state.loading = false;
                console.log('isLoading delete')
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.loading = false;
                console.log('isFullfilled delete')
                const maQG: string = action.payload;
                if (maQG) {
                    state.data = state.data.filter((item) => item.maQG !== maQG);
                }

            })
    }
},)


export default danhmucSlice.reducer