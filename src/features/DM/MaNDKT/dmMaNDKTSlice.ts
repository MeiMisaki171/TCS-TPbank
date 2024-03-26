import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ImaNDKT } from '~/types/DM/maNDKT'
import DMMaNDKTService from './DMMaNDKT.service'


interface danhmucState {
    item: ImaNDKT
    data: ImaNDKT[],
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

export const getAllMaNDKT = createAsyncThunk(
    "danhmuc",
    async () => {
        try {
            const res = await DMMaNDKTService.getAll();
            return res.data;
        } catch (err) {
            console.error(err);
        }
    }
)

export const createMaNDKT = createAsyncThunk(
    "danhmuc/create",
    async (QG: ImaNDKT) => {
        try {
            const res = await DMMaNDKTService.createMaNDKT(QG);
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
            const res = await DMMaNDKTService.findById(maQG);
            return res.data;
        } catch (err) {
            console.error(err)
        }
    }
)

export const updateMaNDKT = createAsyncThunk(
    "danhmuc/update",
    async (qg: ImaNDKT) => {
        try {
            const res = await DMMaNDKTService.updateMaNDKT(qg);
            alert("Sua thanh cong")
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
            const res = await DMMaNDKTService.deleteById(maQG);
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
            .addCase(getAllMaNDKT.pending, (state) => {
                state.loading = true;
                console.log('isLoading')
            })
            .addCase(getAllMaNDKT.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload.map((item: ImaNDKT) => {
                    let newItem = { ...item };
                    if (item.tinhTrang === true) {
                        newItem.tinhTrang = "Hiệu lực"
                    } else {
                        newItem.tinhTrang = "Hết hiệu lực"
                    }
                    return newItem;
                });;
                console.log('isFullfilled');
            })
            .addCase(getAllMaNDKT.rejected, (state, action: PayloadAction<any>) => {
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
            .addCase(createMaNDKT.pending, (state) => {
                state.loading = true;
            })
            .addCase(createMaNDKT.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.loading = false;
                state.item = action.payload;
            })
            .addCase(updateMaNDKT.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
},)


export default danhmucSlice.reducer