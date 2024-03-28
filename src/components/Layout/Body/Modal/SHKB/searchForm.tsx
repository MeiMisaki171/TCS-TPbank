import React, { useState } from 'react'
import Button from '~/components/Button'
import BasicModal from '../basic'
import { Box, Modal } from '@mui/material'
import { BiSearch } from 'react-icons/bi'
import ResultSearch from './resultSearch'

const ShkbSearch = () => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = event.target;
        // setFormData({[name]: value})
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
                <BiSearch className='search-icon'></BiSearch>
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
                                <label className='col-sm-4 col-form-label mb-5'>SHKB:</label>
                                <div className='col-sm-8'>
                                    <input type='text' name='maQG' onChange={handleInputChange} className='form-control'></input>
                                </div>
                                <label className='col-sm-4 col-form-label mb-5'>Tên kho bạc:</label>
                                <div className='col-sm-8'>
                                    <input type='text' name='ten' onChange={handleInputChange} className='form-control'></input>
                                </div>
                            </div>
                            <div className='form-button' style={{ cursor: 'pointer' }}>
                                <BasicModal
                                    children={<ResultSearch></ResultSearch>}
                                    title={'Tìm kiếm'}
                                    styles='primary button button-title'
                                ></BasicModal>
                            </div>
                        </form>
                    </div>
                    <div onClick={handleClose}><Button title={'Thoát'} btnStyle={'exit-btn'}></Button></div>
                </Box>
            </Modal>
        </>

    )
}

export default ShkbSearch