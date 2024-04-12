import React from 'react'
import CardTitle from '../../CardTitle'

const BienLai = () => {
    const title: string[] = [
        'Chọn kênh thanh toán',
        'Thông tin ngân hàng hạch toán',
        'Thông tin biên lai thu'
    ]
    return (
        <form>
            <div className="pe-4 ps-4 border rounded box-ctbc1">
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Ký hiệu BL</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Số BL</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày BL</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Người lập</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Người KS</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày KS</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded box-ctbc1 border">
                <CardTitle title={title[0]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">KBNN thu(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">search</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Hình thức thu</label>
                    </div>
                    <div className="col-sm-8">
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">Tiền mặt</option>
                            <option value="1">Chuyển khoản</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[1]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">TK Nợ (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <>truy van tk</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã KH (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã citad GT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã Phí</label>
                    </div>
                    <div className="col-sm-10">
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tiền phí</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">VAT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <input type="checkbox" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Phí khác</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-2">
                        <label htmlFor="">Mã MIS</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
            </div>
            <div className="pe-4 ps-4 rounded border box-ctbc1">
                <CardTitle title={title[2]}></CardTitle>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Quyết định số (*)</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày quyết định</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Cơ quan QĐ (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Loại hình thu (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tài khoản (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã ĐBHC (*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Ng.nộp tiền (*)</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Địa chỉ (*)</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã số thuế</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Số CMND/HC</label>
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Người nộp thay</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tỉnh NNP</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Huyện  NNP</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <>search</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Lý do nộp (*)</label>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Số tiền (*)</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Số ngày phạt chậm nộp</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Tỷ lệ phạt(%)</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Số tiền phạt chậm nộp</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Số lần nộp</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Lý do nộp chậm</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control ctbl-input" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default BienLai