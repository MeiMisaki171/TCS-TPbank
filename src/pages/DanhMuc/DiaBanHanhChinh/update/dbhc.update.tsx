import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData) {
            formatData(formData);
        }
        console.log(formData);
        dispatch(updateDBHC(formData)).then(
            response => {
                dispatch(getAllDmDBHC())
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
    const handleExit = () => {
        navigate(0);
    }

    return (
        <div className='crud-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label mb-3'>Mã quốc gia:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='maQG' value={formData.maQG} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'>Tên:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='ten' value={formData.ten} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'> Tình trạng:</label>
                    <div className='col-sm-8'>
                        <select name='tinhTrang' onChange={handleSelectChange} defaultValue='True'>
                            <option value='True'>True</option>
                            <option value='False'>False</option>
                        </select>
                    </div>
                </div>
                <div className='form-button'>
                    <Button title={'Lưu'} ></Button>
                    <button type='button' onClick={handleExit}>Thoat</button>
                </div>
            </form>
        </div>
    )
}

export default EditFormDBHC