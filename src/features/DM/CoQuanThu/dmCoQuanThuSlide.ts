import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICoQuanThu } from '~/types/DM/coQuanThu'
import DMCoQuanThuService from './dmCoQuanThu.service'

interface danhmucState {
    item: ICoQuanThu
    data: ICoQuanThu[],
    loading: boolean,
    error: string | null
}

const initialState: danhmucState = {
    item: {
        maQG: '',
        ten: '',
        tinhTrang: true
    },
    data: [],
    loading: false,
    error: ''
}

export const getAllDmCQT = createAsyncThunk(
    "danhmuc",
    async () => {
        try {
            const res = await DMCoQuanThuService.getAll();
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const createCQT = createAsyncThunk(
    "danhmuc/create",
    async (QG: ICoQuanThu) => {
        try {
            const res = await DMCoQuanThuService.createCQT(QG);
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
            const res = await DMCoQuanThuService.findById(maQG);
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateCQT = createAsyncThunk(
    "danhmuc/update",
    async (qg: ICoQuanThu) => {
        try {
            const res = await DMCoQuanThuService.updateCQT(qg);
            console.log(res)
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
            const res = await DMCoQuanThuService.deleteById(maQG);
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
            .addCase(getAllDmCQT.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllDmCQT.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
                console.log('isFullfilled')
            })
            .addCase(getAllDmCQT.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(createCQT.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCQT.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(updateCQT.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer