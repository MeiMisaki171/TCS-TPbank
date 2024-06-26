import React from 'react'
import Button from '~/components/Button';
import Body from '~/components/Layout/Body';
import CtblFormLeft from '~/components/Layout/Body/CTBL/CtblFormLeft';
import BienLai from '~/components/Layout/Body/CTBL/FormBienLai/formBienLai';
import Header from '~/components/Layout/Header';

const lapBienLaiThu = () => {
    const listBtn = ['Lập mới', 'In', 'Ghi', 'Hủy', 'In bản sao', 'Thoát'];

    return (
        <div>
            <Header></Header>
            <Body>
                <div className='form-content card border-ctbc'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <CtblFormLeft />
                            </div>
                            <div className='col-sm-8'>
                                <BienLai></BienLai>
                            </div>
                        </div>
                        <div>
                            <div className='border rounded box-ctbc1 card-body'>
                                <div className='d-flex justify-content-between align-items-center mb-4'>
                                    <label className='fw-bold box-ctbl1'>Chế độ làm việc: Lập Biên lai</label>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {listBtn.map((item) => {
                                        return (
                                            <div className='me-2' key={listBtn.indexOf(item)}><Button title={item}></Button></div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>
        </div>
    )
}

export default lapBienLaiThu