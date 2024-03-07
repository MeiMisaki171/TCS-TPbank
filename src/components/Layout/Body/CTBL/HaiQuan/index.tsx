import React from 'react'
import CardTitle from '../../CardTitle'
import './style.css'
import Button from '~/components/Button'
import { BiSearchAlt, BiSolidTrash } from 'react-icons/bi'

const HaiQuan = () => {
  const title1: string = 'Danh sách chứng từ đã nhập'
  const title2: string = 'Thông tin ngân hàng hạch toán'
  const title3: string = 'Thông tin về NNT'
  const title4: string = 'Thông tin chi tiết (*)'
  return (
    <>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title1} />
          <div className='row mb-2'>
          <div className='col-sm-2'>
            <label className='col-form-label'>KHCT</label>
          </div>
          <div className='col-md-2'>
            <input type='text' className='form-control' id="inputnumber" placeholder='765432133'></input>
          </div>
          <div className='col-sm-2'>
            <label className='col-form-label'>Số CT</label>
          </div>
          <div className='col-sm-2'>
          <input type='text' className='form-control' id="inputnumber2" placeholder='Số CT'></input>
          </div>
          <div className='col-sm-2'>
            <label className='col-form-label'>Ngày CT</label>
          </div>
          <div className='col-sm-2'>
          <input type='date' className='form-control'></input>
          </div>
          </div>
          <div className='row mb-2'>
          <div className='col-sm-2'>
            <label className="col-form-label">Người lập</label>
          </div>
          <div className='col-md-2'>
            <input type="text" className="form-control" id="inputnumber3" placeholder="user 2 " />
          </div>
          <div className='col-sm-2'>
            <label className="col-form-label">Người KS</label>
          </div>
          <div className='col-md-2'>
            <input type="text" className="form-control" id="inputnumber4" placeholder="Người KS "/>
          </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title2} />
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className="col-form-label">TK Nợ (*)</label>
            </div>
            <div className='col-md-2'>
              <input type="text" className="form-control" id="" placeholder="TK Nợ " />
            </div>
            <div className='col-sm-8'>
              <input type='text' className='form-control' placeholder='NH TNHH CTBC - Chi nhánh TP Hồ Chí Minh' />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className='col-form-label'>KBNN thu (*)</label>
            </div>
            <div className='col-md-2'>
              <input type='text' className='form-control' placeholder='KBNN thu' />
            </div>
            <div className='col-sm-6'>
              <input type='text' className='form-control' placeholder='' />
            </div>
            <div className='col-sm-1'>
              <Button icon={<BiSearchAlt />} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className="col-form-label">Mã tiền tệ (*)</label>
            </div>
            <div className='col-md-2'>
              <input type="text" className="form-control" id="" placeholder="Mã tiền tệ "/>
            </div>
            <div className='col-sm-8'>
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className='row mb-2'>
            <div className="col-sm-2">
              <label className="col-form-label">Tỷ giá (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Tỷ giá" />
            </div>
            <div className="col-sm-2">
              <label className="col-form-label">Ref Number</label>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
            <div className="col-sm-2">
              <label className="col-form-label">Ngày nộp thuế (*)</label>
            </div>
            <div className="col-sm-2">
              <input type="date" className="form-control"/>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã citad TT (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Mã citad TT" />
            </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã citad GT (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Mã citad GT " />
            </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title3} />
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã số thuế (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Mã số thuế"/>
            </div>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
            <div className="col-sm-3">
            <Button title={'Truy vấn HQ'} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Loại Thuế</label>
            </div>
            <div className="col-md-2">
              <select id="inputState1" className="form-select">
                <option value="default">Thuế hải quan</option>
                <option>Loại Thuế  1</option>
                <option>Loại Thuế  2</option>
                <option>Loại Thuế  3</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Địa chỉ</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">MST người nộp thay</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="MST người nộp thay"/>
            </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Đ/C người nộp thay</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">TK thu ngân sách (*)</label>
            </div>
          <div className="col-md-2">
            <input type="text" className="form-control" id="" placeholder="TK thu ngân sách "/>
          </div>
          <div className="col-sm-6">
            <input type="text" className="form-control" id="" placeholder=" "/>
          </div>
            <div className="col-sm-1">
              <Button icon={<BiSearchAlt />} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Chương (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Chương "/>
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
            <div className="col-sm-1">
              <Button icon={<BiSearchAlt />} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã HQ (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Mã HQ "/>
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
            <div className="col-sm-1">
              <Button icon={<BiSearchAlt />} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Diễn giải</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="" placeholder=" "/>
            </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title4} />
          <div className="table-responsive">
            <table className="table mb-0 table-hover">
              <thead className="table-light">
                <tr>
                  <th>Số tờ khai</th>
                  <th>Ngày TK</th>
                  <th>LHXNK</th>
                  <th>NDKT</th>
                  <th>Tên NDKT</th>
                  <th>Tiền NT</th>
                  <th>Số tiền</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#001</td>
                  <td>25/12/2022</td>
                  <td>abcde</td>
                  <td>ẻtyui</td>
                  <td>HuongDTT</td>
                  <td>98765432</td>
                  <td>98765</td>
                  <td>
                    <div className="d-flex order-actions">
                      <BiSolidTrash />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default HaiQuan