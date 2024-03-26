import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IDbhc } from '~/types/DM/diaBanHanhChinh'
import DMDiaBanHCService from './dmDBHC.service'

interface danhmucState {
    item: IDbhc
    data: IDbhc[],
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

export const getAllDmDBHC = createAsyncThunk(
    "danhmuc",
    async () => {
        try {
            const res = await DMDiaBanHCService.getAll();
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const createDBHC = createAsyncThunk(
    "danhmuc/create",
    async (QG: IDbhc) => {
        try {
            const res = await DMDiaBanHCService.createDBHC(QG);
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
            const res = await DMDiaBanHCService.findById(maQG);
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateDBHC = createAsyncThunk(
    "danhmuc/update",
    async (qg: IDbhc) => {
        try {
            const res = await DMDiaBanHCService.updateDBHC(qg);
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
            const res = await DMDiaBanHCService.deleteById(maQG);
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
            .addCase(getAllDmDBHC.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllDmDBHC.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload.map((item: IDbhc) => {
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
            .addCase(getAllDmDBHC.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(createDBHC.pending, (state) => {
                state.loading = true;
            })
            .addCase(createDBHC.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(updateDBHC.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer