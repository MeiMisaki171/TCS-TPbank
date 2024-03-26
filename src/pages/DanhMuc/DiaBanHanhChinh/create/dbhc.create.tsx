import React from 'react'
// import './style.css'
import Button from '~/components/Button';
import { useAppDispatch } from '~/hook/redux-hook';
import { createDBHC, getAllDmDBHC } from '~/features/DM/DiaBanHanhChinh/dmDBHCSlice';
import { IDbhc } from '~/types/DM/diaBanHanhChinh';

const CreateFormDBHC = () => {

    // interface FormProps {
    //     onSubmit: (data: dataTable) => void;
    // }

    const dispatch = useAppDispatch();


    const [formData, setFormData] = React.useState(
        {
            maQG: '',
            ten: '',
            tinhTrang: 'True'
        }
    )




    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    //format lại data
    const formatData = (formData: IDbhc) => {
        if (formData.tinhTrang === 'True') {
            formData.tinhTrang = true;
        } else if (formData.tinhTrang === 'False') {
            formData.tinhTrang = false;
        }

        return formData;
    }

    //Tao moi
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData) {
            formatData(formData);
        }
        dispatch(createDBHC(formData)).then(
            response => {
                dispatch(getAllDmDBHC())
            }
        );

        setFormData({
            maQG: '',
            ten: '',
            tinhTrang: 'True'
        })
    }

    return (
        <div className='crud-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group row'>
                    <label className='col-sm-4 col-form-label mb-3'>Mã ĐBHC:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='maQG' value={formData.maQG} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'>Tên:</label>
                    <div className='col-sm-8'>
                        <input type='text' name='ten' value={formData.ten} onChange={handleInputChange} className='form-control'></input>
                    </div>
                    <label className='col-sm-4 col-form-label mb-3'> Tình trạng:</label>
                    <div className='col-sm-8'>
                        <select name='tinhTrang' onChange={handleSelectChange} defaultValue='True' className='form-select' >
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

export default CreateFormDBHC