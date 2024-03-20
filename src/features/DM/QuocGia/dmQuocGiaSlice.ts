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

export const createQG = createAsyncThunk(
    "danhmuc/create",
    async (QG: dataTable) => {
        try {
            const res = await DMQuocGiaService.createQG(QG);
            return res.data
        } catch (err) {
            alert(`Them moi khong thanh cong ${err}`);
            console.error(err)
        }
    }
)

export const findById = createAsyncThunk(
    "danhmuc/findById",
    async (maQG: string) => {
        try {
            const res = await DMQuocGiaService.findById(maQG);
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateQG = createAsyncThunk(
    "danhmuc/update",
    async (qg: dataTable) => {
        try {
            const res = await DMQuocGiaService.updateQG(qg)
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const deleteById = createAsyncThunk(
    "danhmuc/delete",
    async (maQG: string) => {
        try {
            const res = await DMQuocGiaService.deleteById(maQG);
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
                state.loading = true;
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
            .addCase(createQG.pending, (state) => {
                state.loading = true;
            })
            .addCase(createQG.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                const maQG: string = action.payload;
                if (maQG) {
                    state.data = state.data.filter((item) => item.maQG === maQG)
                }
            })
            .addCase(updateQG.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer