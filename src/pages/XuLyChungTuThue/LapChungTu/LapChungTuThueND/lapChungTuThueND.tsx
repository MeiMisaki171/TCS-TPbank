import React from 'react'
import Button from '~/components/Button'
import Body from '~/components/Layout/Body'
import CtblFormLeft from '~/components/Layout/Body/CTBL/CtblFormLeft'
import NoiDia from '~/components/Layout/Body/CTBL/FormNoiDia/formNoiDia'
import ChungTuDetail from '~/components/Layout/Body/CTBL/ctuDetail/chungTuDetail'
import Header from '~/components/Layout/Header'
import { DetailChungTuND } from '~/types/ChungTu/detailChungTuND'

const lapChungTuThueND = () => {

    const listBtn = ['Lập mới', 'In', 'Ghi', 'Hủy', 'In bản sao', 'Thoát'];

    const data: DetailChungTuND = {
        chuong: '',
        ndkt: '',
        noiDung: '',
        soTien: '',
        soTienVnd: '',
        kyThue: '',
    };
    const initialValue: DetailChungTuND[] = [{
        chuong: '',
        ndkt: '',
        noiDung: '',
        soTien: '',
        soTienVnd: '',
        kyThue: '',
    }];

    const header: string[] = [
        'Chương', 'NDKT', "Nội dung", 'Số tiền', 'Số tiền(VND)', 'Kỳ thuế', 'Xóa'
    ];
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
                                <NoiDia></NoiDia>
                            </div>
                        </div>
                        <div>
                            <ChungTuDetail
                                data={data}
                                initialValue={initialValue}
                                header={header}
                            ></ChungTuDetail>
                            <div className='border rounded box-ctbc1 card-body'>
                                <div className='d-flex justify-content-between align-items-center mb-4'>
                                    <label className='fw-bold box-ctbl1'>Chế độ làm việc: Lập chứng từ</label>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <label className='box-ctbl1 pe-2'>Tổng tiền:</label>
                                        <input className='form-control col-sm-2' placeholder='0' style={{ width: '70%' }} />
                                    </div>
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

export default lapChungTuThueND