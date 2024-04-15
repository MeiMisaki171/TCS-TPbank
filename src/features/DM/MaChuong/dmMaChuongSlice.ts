import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import DMQuocGiaService from '~/features/DM/MaChuong/DMMaChuong.service'
import { maChuong } from '~/types/DM/maChuong'

interface danhmucState {
    item: maChuong
    data: maChuong[],
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

export const getAllDMMaChuong = createAsyncThunk(
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

export const createMC = createAsyncThunk(
    "danhmuc/create",
    async (QG: maChuong) => {
        try {
            const res = await DMQuocGiaService.createMC(QG);
            alert(`Them moi thanh cong`);
            return res.data
        } catch (err) {
            alert(`Them moi khong thanh cong ${err}`);
            console.error(err);
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

export const updateMC = createAsyncThunk(
    "danhmuc/update",
    async (qg: maChuong) => {
        try {
            const res = await DMQuocGiaService.updateMC(qg);
            alert('Sửa thành công');
            console.log(qg);
            return res.data;
        } catch (err) {
            console.error(err);
            alert('Sửa không thành công');
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
            .addCase(getAllDMMaChuong.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllDMMaChuong.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
                console.log('isFullfilled')
            })
            .addCase(getAllDMMaChuong.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(createMC.pending, (state) => {
                state.loading = true;
            })
            .addCase(createMC.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(updateMC.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer