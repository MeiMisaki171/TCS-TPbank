import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button'
import { findById, getAllDMMaChuong, updateMC } from '~/features/DM/MaChuong/dmMaChuongSlice';
import { maChuong } from '~/types/DM/maChuong';
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook';
// import { hideModal } from '~/features/Modal/modalSlice';

const EditFormQG = ({ id }: any) => {

    const dispatch = useAppDispatch();

    const item: maChuong = useAppSelector(state => state.danhmuc.item);

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

    const formatData = (formData: maChuong) => {
        if (formData.tinhTrang === 'True') {
            formData.tinhTrang = true;
        } else if (formData.tinhTrang === 'False') {
            formData.tinhTrang = false;
        }

        return formData;
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData) {
            formatData(formData);
        }
        dispatch(updateMC(formData)).then(
            response => {
                dispatch(getAllDMMaChuong())
            }
        );
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const navigate = useNavigate();
    const handleClose = () => {
        navigate(0)
    }

    return (
        <div className='crud-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label mb-3'>Chương (<span style={{ color: 'red' }}>*</span>):</label>
                    <div className='col-sm-8'>
                        <input type='text' name='maQG' value={formData.maQG} readOnly className='form-control read-only'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'>Tên (<span style={{ color: 'red' }}>*</span>):</label>
                    <div className='col-sm-8'>
                        <input type='text' name='ten' value={formData.ten} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'> Tình trạng:</label>
                    <div className='col-sm-8'>
                        <select name='tinhTrang' onChange={handleSelectChange} defaultValue='True'>
                            <option value='True'>Hiệu lực</option>
                            <option value='False'>Hết hiệu lực</option>
                        </select>
                    </div>
                </div>
                <div className='form-button'>
                    <Button title={'Lưu'} ></Button>
                    <button type='button' onClick={handleClose}>Thoat</button>
                </div>
            </form>
        </div>
    )
}

export default EditFormQG