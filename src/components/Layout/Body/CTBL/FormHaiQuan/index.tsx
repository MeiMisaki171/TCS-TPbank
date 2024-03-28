import React from 'react'
import CardTitle from '../../CardTitle'
import './style.css'
import Button from '~/components/Button'
import { BiSearchAlt, BiSolidTrash } from 'react-icons/bi'
import TruyVanHQ from '../../Modal/TruyVanHQ/truyVanHQ'
import TruyVanTK from '../../Modal/TruyVanTK/truyVanTK'
import Dbhc from '../../Modal/DBHC/dbhc'
import Chuong from '../../Modal/Chuong/chuong'
import CoQuanThu from '../../Modal/CoQuanThu/coQuanThu'

const HaiQuan = () => {
  const title1: string = 'Danh sách chứng từ đã nhập'
  const title2: string = 'Thông tin ngân hàng hạch toán'
  const title3: string = 'Thông tin về NNT'
  const title5: string = 'Truy vấn tờ khai'
  const title6: string = 'Chọn kênh thanh toán'
  return (
    <>
      <div>
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
              <input type="text" className="form-control" id="inputnumber4" placeholder="Người KS " />
            </div>
            <div className='col-sm-2'>
              <label className='col-form-label'>Ngày ĐC</label>
            </div>
            <div className='col-sm-2'>
              <input type='date' className='form-control'></input>
            </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title5} />
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className='col-form-label'>Tra cứu</label>
            </div>
            <div className='col-sm-6'>
              <input type="text" className='form-control' />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label htmlFor="m" className='col-form-label'>Mã số thuế (*)</label>
            </div>
            <div className='col-sm-6'>
              <input type="text" className='form-control' />
            </div>
            <div className='col-sm-2'>
              <TruyVanHQ></TruyVanHQ>
            </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title6}></CardTitle>
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
              <label className='col-form-label'>Hình thức thu</label>
            </div>
            <div className='col-sm-8'>
              <input type='text' className='form-control' placeholder='' />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className='col-form-label'>Mã ngoại tệ</label>
            </div>
            <div className='col-sm-4'>
              <input type='text' className='form-control' placeholder='VND' />
            </div>
            <div className='col-sm-2'>
              <input type='text' className='form-control' placeholder='VND' disabled />
            </div>
            <div className='col-sm-2'>
              <label className='col-form-label'>Tỷ giá</label>
            </div>
            <div className='col-sm-2'>
              <input type='text' className='form-control' placeholder='1' />
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
            <div className='col-sm-4'>
              <input type='text' className='form-control' placeholder='NH TNHH CTBC - Chi nhánh TP Hồ Chí Minh' />
            </div>
            <div className='col-sm-2'>
              <TruyVanTK></TruyVanTK>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-2'>
              <label className="col-form-label">Mã KH</label>
            </div>
            <div className='col-md-2'>
              <input type="text" className="form-control" id="" placeholder="" />
            </div>
            <div className='col-sm-6'>
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã citad GT</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="" disabled />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" " disabled />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã phí</label>
            </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Tiền phí</label>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="" placeholder=" " disabled />
            </div>
            <div className="col-sm-2">
              <label className="col-form-label d-flex justify-content-center">VAT</label>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="" placeholder=" " disabled />
            </div>
            <div className='col-sm-4 d-flex'>
              <input type="checkbox" />
              <label className="col-form-label ms-2">Phí khác</label>
            </div>
          </div>
        </div>
        <div className='p-4 border rounded box-ctbc1'>
          <CardTitle title={title3} />
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã số thuế (*)</label>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="" placeholder="Mã số thuế" />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Địa chỉ người nộp thuế (*)</label>
            </div>
            <div className="col-md-2">
              <input type='text' className='form-control' />
            </div>
            <div className="col-sm-2">
              <label className="col-form-label">Huyện</label>
            </div>
            <div className="col-md-2">
              <input type='text' className='form-control' />
            </div>
            <div className="col-sm-2">
              <label className="col-form-label">Tỉnh/TP</label>
            </div>
            <div className="col-md-2">
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">MST người nộp thay</label>
            </div>
            <div className="col-sm-2">
              <input type='text' className='form-control' />
            </div>
            <div className="col-sm-6">
              <input type='text' className='form-control' />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Địa chỉ người nộp thay</label>
            </div>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">TK thu ngân sách(*)</label>
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Mã địa bàn hành chính (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
            <div className="col-sm-2">
              <Dbhc></Dbhc>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Chương (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Chương " />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
            <div className="col-sm-1">
              <Chuong />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Cơ quan thu (*)</label>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" id="" placeholder="Mã HQ " />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
            <div className="col-sm-1">
              <CoQuanThu />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <label className="col-form-label">Diễn giải</label>
            </div>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="" placeholder=" " />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default HaiQuan