import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import Button from '~/components/Button';
// import './style.css'

// interface IFakeData {
//     shkb: string;
//     chuong: string;
//     tkThu: string;
//     hqph: string;
// }

const Chuong = () => {

    // const fakeData: IFakeData = {
    //     // eslint-disable-next-line no-octal
    //     shkb: '0001',
    //     chuong: '0001',
    //     tkThu: 'tk thu',
    //     hqph: 'tk hqph'

    // }

    const handleInputChange = () => {

    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {

    }

    return (
        <>
            <div onClick={handleOpen} >
                <Button icon={<BiSearchAlt />} />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'box-style'}>
                    <div className='crud-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group row'>
                                <label className='col-sm-4 col-form-label mb-5'>Chương:</label>
                                <div className='col-sm-8'>
                                    <input type='text' name='maQG' onChange={handleInputChange} className='form-control'></input>
                                </div>
                                <label className='col-sm-4 col-form-label mb-5'>Tên:</label>
                                <div className='col-sm-8'>
                                    <input type='text' name='ten' onChange={handleInputChange} className='form-control'></input>
                                </div>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <Button title={'Tìm kiếm'}></Button>
                                {/* <Button title={'Chọn'}></Button> */}
                            </div>
                        </form>
                    </div>
                    {/* <div className='result-HQ ms-4 me-4'>
                        <table className='table table-bordered'>
                            <thead >Kết quả truy vấn</thead>
                            <tbody>
                                <tr>
                                    <th scope='col' className='col-sm-2'>SHKB</th>
                                    <th scope='col' className='col-sm-2'>Chương *</th>
                                    <th scope='col' className='col-sm-4'>TK thu NS *</th>
                                    <th scope='col' className='col-sm-4'>HQPH *</th>
                                </tr>
                                <tr>
                                    <td className='col-sm-2'>{fakeData.shkb}</td>
                                    <td className='col-sm-2'>{fakeData.chuong}</td>
                                    <td className='col-sm-4'>{fakeData.tkThu}</td>
                                    <td className='col-sm-4'>{fakeData.hqph}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    <div onClick={handleClose}><Button title={'Thoát'} btnStyle={'exit-btn'}></Button></div>
                </Box>
            </Modal>
        </>
    )
}

export default Chuong