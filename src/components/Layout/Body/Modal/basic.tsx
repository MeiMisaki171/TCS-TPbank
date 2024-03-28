import { Box, Modal } from '@mui/material'
import { ReactElement, useState } from 'react'
import './style.css'
import Button from '~/components/Button'

interface modalProps {
    children: ReactElement;
    title: ReactElement | string;
    styles?: string;
}

const BasicModal = ({ children, title, styles }: modalProps) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <div onClick={handleOpen} className={`${styles}`}>{title}</div>
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