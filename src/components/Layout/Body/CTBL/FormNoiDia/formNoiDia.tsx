import React from 'react'
import { Checkbox } from '@mui/material';
import CardTitle from '../../CardTitle';
import './../style.css';

const NoiDia = () => {
    const title: string[] = [
        'Danh sách chứng từ đã nhập',
        'Truy vấn tờ khai',
        'Chọn kênh thanh toán',
        'Thông tin ngân hàng hạch toán',
        'Thông tin về NNT'
    ]
    return (
        <div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[0]} />
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>KHCT</label>
                    </div>
                    <div className='col-md-2'>
                        <input type='text' className='form-control ctbl-input' id="inputnumber" placeholder='765432133'></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Số CT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="inputnumber2" placeholder='Số CT'></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Ngày CT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='date' className='form-control ctbl-input'></input>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-sm-2'>
                        <label className="">Người lập</label>
                    </div>
                    <div className='col-md-2'>
                        <input type="text" className="form-control ctbl-input" id="inputnumber3" placeholder="user 2 " />
                    </div>
                    <div className='col-sm-2'>
                        <label className="">Người KS</label>
                    </div>
                    <div className='col-md-2'>
                        <input type="text" className="form-control ctbl-input" id="inputnumber4" placeholder="Người KS " />
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Ngày ĐC</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='date' className='form-control ctbl-input'></input>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[1]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Tra cứu</label>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã số thuế</label>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[2]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>KBNN thu</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Hình thức thu</label>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã ngoại tệ</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-4'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2 d-flex justify-content-center'>
                        <label className=''>Tỷ giá</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[3]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>TK Nợ</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-4'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã KH</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã citad GT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã Phí</label>
                    </div>
                    <div className='col-sm-6'>
                        <select defaultValue='1'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Tiền phí</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>VAT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2'>
                        <Checkbox></Checkbox>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Phí khác</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã MIS</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
            </div>
            <div className='pe-4 ps-4 border rounded box-ctbc1'>
                <CardTitle title={title[4]}></CardTitle>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã số thuế</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Địa chỉ NNT</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Huyện</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Tỉnh/TP</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>MST người nộp thay</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Địa chỉ người nộp thay</label>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>TK thu ngân sách</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã ĐBHC</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Cơ quan thu</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Mã ngoại tệ</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-4'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                    <div className='col-sm-2'>
                        <label className=''>Tỷ giá</label>
                    </div>
                    <div className='col-sm-2'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <label className=''>Diễn giải</label>
                    </div>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control ctbl-input' id="" placeholder=''></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoiDia