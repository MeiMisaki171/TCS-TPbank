import React from 'react'
import Button from '~/components/Button'
import Body from '~/components/Layout/Body'
import ChungTuDetail from '~/components/Layout/Body/CTBL/ctuDetail/chungTuDetail'
import Header from '~/components/Layout/Header'
import { DetailChungTuLNH } from '~/types/ChungTu/detailChungTuLNH'

const LapCtuLNH = () => {
    const listBtn = ['Lập mới', 'Ghi', 'Hủy', 'Thoát'];

    const data: DetailChungTuLNH = {
        chuong: '',
        ndkt: '',
        noiDung: '',
        soTien: '',
        kyThue: '',
    };
    const initialValue: DetailChungTuLNH[] = [{
        chuong: '',
        ndkt: '',
        noiDung: '',
        soTien: '',
        kyThue: '',
    }];

    const header: string[] = [
        'Chương', 'NDKT', "Nội dung", 'Số tiền', 'Kỳ thuế', 'Xóa'
    ];
    return (
        <div>
            <Header></Header>
            <Body>
                <div className='form-content card border-ctbc'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-sm-4'>

                            </div>
                            <div className='col-sm-8'>
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

export default LapCtuLNH