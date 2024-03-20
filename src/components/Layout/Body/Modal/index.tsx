import { Box, Modal } from '@mui/material'
import { useState } from 'react'
import './style.css'

const BasicModal = ({ children, title }: any) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div onClick={handleOpen} >{title}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={'box-style'}>
                    {children}
                </Box>
            </Modal>
        </>
    )
}

export default BasicModal