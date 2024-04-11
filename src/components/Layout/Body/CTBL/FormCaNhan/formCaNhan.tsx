import React from 'react'
import CardTitle from '../../CardTitle';
import './../style.css'

const formCaNhan = () => {
    const title: string[] = [
        'Danh sách chứng từ',
        'Chọn kênh thanh toán',
        'Thông tin ngân hàng hạch toán',
        'Thông tin về NNT'
    ];
    return (
        <div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[0]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>KHCT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Số CT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-sm-2'>
                        <label htmlFor="">Ngày CT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control'></input>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-sm-2'>
                        <label className="">Người lập</label>
                    </div>
                    <div className='col-md-2'>
                        <input type="text" className="form-control" id="inputnumber3" placeholder="user 2 " />
                    </div>
                    <div className='col-sm-2'>
                        <label className="">Người KS</label>
                    </div>
                    <div className='col-md-2'>
                        <input type="text" className="form-control" id="inputnumber4" placeholder="Người KS " />
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Ngày ĐC</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='date' className='form-control'></input>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[1]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label>KBNN thu(*)</label>
                    </div>
                    <div className='col-sm-2'>
                        <input className='form-control' type='text'></input>
                    </div>
                    <div className='col-sm-6'>
                        <input className='form-control' type='text'></input>
                    </div>
                    <div>
                        <>asd</>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label>Hình thức thu</label>
                    </div>
                    <div className='col-sm-8'>
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">Tiền mặt</option>
                            <option value="1">Chuyển khoản</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[2]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label htmlFor="">TK Nợ(*)</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='col-sm-4'>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='col-sm-2'>Truy van TK</div>
                </div>
                <div className="row">
                    <div className='col-sm-2'>
                        <label htmlFor="">Mã KH(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-sm-8">
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
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">VAT</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <input type="checkbox" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Phí khác</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã MIS</label>
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
                        <label htmlFor="">Loại thuế(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <select name="" id="" defaultValue={'0'}>
                            <option value="0">Thuế nội địa</option>
                            <option value="1">Thuế trước bạ</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã số thuế(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-4">
                        <>Truy van thue</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tên người nộp thuế(*)</label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="" style={{ whiteSpace: 'nowrap' }}>Địa chỉ người nộp thuế(*)</label>
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
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Tên người nộp thay</label>
                    </div>
                    <div className="col-sm-10">
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
                        <label htmlFor="">TK thu ngân sách(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="" style={{ whiteSpace: 'nowrap' }}>Mã địa bàn hành chính(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>ads</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Cơ quan thu(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <>ads</>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Mã ngoại tệ(*)</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" placeholder='VND' />
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder='Tien VND' />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Tỷ giá</label>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Số QĐ/TB</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="">Cơ quan quyết định</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="">Ngày quyết định</label>
                    </div>
                    <div className="col-sm-4">
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

export default formCaNhan