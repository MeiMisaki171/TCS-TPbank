import { Box, Modal } from '@mui/material'
import { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { hideModal, showModal } from '~/features/Modal/modalSlice'
import Button from '~/components/Button'

const BasicModal = ({ children, title }: any) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    // const dispatch = useDispatch();

    // const open = useSelector((state: RootState) => state.modal.show);

    // const handleOpen = () => {
    //     dispatch(showModal())
    // }

    // const handleClose = () => {
    //     dispatch(hideModal())
    // }

    return (
        <>
            <div onClick={handleOpen} className='px-5 py-1'>{title}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'box-style'}>
                    {children}
                    <div onClick={handleClose}><Button title={'Thoát'} btnStyle={'exit-btn'}></Button></div>
                </Box>
            </Modal>
        </>
    )
}

export default BasicModal