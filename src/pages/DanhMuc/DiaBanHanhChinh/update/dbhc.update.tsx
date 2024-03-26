import React, { useEffect } from 'react'
import Button from '~/components/Button'
import { findById, getAllDmDBHC, updateDBHC } from '~/features/DM/DiaBanHanhChinh/dmDBHCSlice';
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook';
import { IDbhc } from '~/types/DM/diaBanHanhChinh';

const EditFormDBHC = ({ id }: any) => {

    const dispatch = useAppDispatch();

    const item: IDbhc = useAppSelector(state => state.danhmuc.item);

    useEffect(() => {
        dispatch(findById(id)).then(
            res => {
                setFormData(res.payload)
                return
            }
        );
    }, [dispatch, id])

    const [formData, setFormData] = React.useState(
        item
    )

    const formatData = (formData: IDbhc) => {
        if (formData.tinhTrang === 'True') {
            formData.tinhTrang = true;
        } else if (formData.tinhTrang === 'False') {
            formData.tinhTrang = false;
        }

        return formData;
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    //submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData) {
            formatData(formData);
        }
        dispatch(updateDBHC(formData)).then(
            response => {
                dispatch(getAllDmDBHC())
            }
        );
    }

    return (
        <div className='crud-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label mb-3'>Mã ĐBHC:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='maQG' readOnly value={formData.maQG} onChange={handleInputChange} className='form-control read-only'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'>Tên:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='ten' value={formData.ten} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'> Tình trạng:</label>
                    <div className='col-sm-8'>
                        <select name='tinhTrang' onChange={handleSelectChange} defaultValue='True' className='form-select'>
                            <option value='True'>Hiệu lực</option>
                            <option value='False'>Hết hiệu lực</option>
                        </select>
                    </div>
                </div>
                <div className='form-button'>
                    <Button title={'Lưu'} ></Button>
                </div>
            </form>
        </div>
    )
}

export default EditFormDBHC