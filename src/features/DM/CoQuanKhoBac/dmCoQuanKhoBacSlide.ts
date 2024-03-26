import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICoQuanKB } from '~/types/DM/coQuanKhoBac'
import DMCoQuanKBService from './dmCoQuanKhoBac.service'

interface danhmucState {
    item: ICoQuanKB
    data: ICoQuanKB[],
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

export const getAllDmCQKB = createAsyncThunk(
    "danhmuc",
    async () => {
        try {
            const res = await DMCoQuanKBService.getAll();
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const createCQKB = createAsyncThunk(
    "danhmuc/create",
    async (QG: ICoQuanKB) => {
        try {
            const res = await DMCoQuanKBService.createCQKB(QG);
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
            const res = await DMCoQuanKBService.findById(maQG);
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateCQKB = createAsyncThunk(
    "danhmuc/update",
    async (qg: ICoQuanKB) => {
        try {
            const res = await DMCoQuanKBService.updateCQKB(qg);
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
            const res = await DMCoQuanKBService.deleteById(maQG);
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
            .addCase(getAllDmCQKB.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllDmCQKB.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload.map((item: ICoQuanKB) => {
                    let newItem = { ...item };
                    if (item.tinhTrang === true) {
                        newItem.tinhTrang = "Hiệu lực"
                    } else {
                        newItem.tinhTrang = "Hết hiệu lực"
                    }
                    return newItem;
                });;
                console.log('isFullfilled')
            })
            .addCase(getAllDmCQKB.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(createCQKB.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCQKB.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(updateCQKB.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer