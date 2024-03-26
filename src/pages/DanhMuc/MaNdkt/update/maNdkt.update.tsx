import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook';
import { findById, getAllMaNDKT, updateMaNDKT } from '~/features/DM/MaNDKT/dmMaNDKTSlice';
import { ImaNDKT } from '~/types/DM/maNDKT';

const EditFormNDKT = ({ id }: any) => {

    const dispatch = useAppDispatch();

    const item: ImaNDKT = useAppSelector(state => state.danhmuc.item);

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

    //format data
    const formatData = (formData: ImaNDKT) => {
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
        console.log(formData);
        dispatch(updateMaNDKT(formData)).then(
            response => {
                dispatch(getAllMaNDKT())
            }
        );
    }

    return (
        <div className='crud-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label mb-3'>Mã quốc gia:</label>
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

export default EditFormNDKT