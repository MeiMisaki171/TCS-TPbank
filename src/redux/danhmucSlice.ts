import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { dataTable } from '~/components/Layout/Body/DataTable';
import DMQuocGiaService from '~/services/DM/DMQuocGia.service'

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
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                state.loading = false;
                const maQG: string = action.payload;
                if (maQG) {
                    state.data = state.data.filter((item) => item.maQG !== maQG);
                }
            })
    }
},)


export default danhmucSlice.reducer