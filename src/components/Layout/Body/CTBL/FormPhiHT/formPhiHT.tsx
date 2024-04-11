import React from 'react'
import CardTitle from '../../CardTitle';
import './../style.css'

const formPhiHT = () => {

    const title: string[] = [
        'Danh sách chứng từ đã nhập',
        'Truy vấn tờ khai',
        'Chọn kênh thanh toán',
        'Thông tin ngân hàng hạch toán',
        'Thông tin về NNT'
    ]
    return (
        <div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[0]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">KHCT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Số CT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày CT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Người lập</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Người KS</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày ĐC</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[1]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã số thuế*</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>truy van HQ</>
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[2]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">KBNN thu(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Hình thức thu</label>
                    </div>
                    <div className="col-sm-6">
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">Tiền mặt</option>
                            <option value="1">Chuyển khoản</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã ngoại tệ</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder='VND' />
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder='Tien VND' disabled />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor=""> Tỷ giá</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[3]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">TK Nợ (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>Truy van TK</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã KH (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã citad GT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã Phí</label>
                    </div>
                    <div className="col-sm-8">
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tiền phí</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">VAT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className='col-sm-2'>
                        <input type="checkbox" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Phí khác</label>
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[4]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã số thuế (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Địa chỉ người nộp thuế(*)</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">MST người nộp thay</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Địa chỉ người nộp thay</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">TK thu ngân sách (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Chương (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã CQT ĐV thu phí (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã loại phí (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã ĐV thu phí (*)	</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Thông tin khác</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Diễn giải</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default formPhiHT