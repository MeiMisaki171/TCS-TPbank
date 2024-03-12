import React from 'react'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import Header from '~/components/Layout/Header'
import './style.css'

const MaChuong = () => {

    return (
        <div>
            <Header></Header>
            <Body>
                <div className="card border-top border-0 border-2 border-danger">
                    <div className="card-body">

                        <div className="card-title d-flex align-items-center">
                            <div><i className="fadeIn animated bx bx-search me-1 font-30 text-danger"></i>
                            </div>
                            <h5 className="mb-0 dktk-title">Điều kiện tìm kiếm</h5>
                        </div>
                        <hr></hr>
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <label className="col-form-label">Mã LHXNK</label>
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="inputEnterYourMa" placeholder="Nhập mã LHXNK" />
                            </div>
                            <div className="col-sm-2">
                                <label className="col-form-label">Tên LHXNK</label>
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="inputEnterYourName" placeholder="Nhập tên LHXNK" />
                            </div>
                            <div className="col-sm-2">
                                <label className="col-form-label">Tên viết tắt LHXNK</label>
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="inputEnterYourName1" placeholder="Nhập tên viết tắt LHXNK" />
                            </div>
                        </div>

                        <hr></hr>
                        <div className="row mb-3 text-center">
                            <div className="col-sm-12">
                                <button type="button" className="btn crud-btn px-5 radius-30"><i className="fadeIn animated bx bx-search-alt mr-1"></i>Tìm kiếm</button>
                                <button type="button" className="btn crud-btn px-5 radius-30"><i className="fadeIn animated bx bx-plus-circle mr-1"></i>Thêm mới</button>
                                <button type="button" className="btn crud-btn px-5 radius-30"><i className="fadeIn animated bx bx-eraser mr-1"></i>Xoá</button>
                                <button type="button" className="btn crud-btn px-5 radius-30"><i className="fadeIn animated bx bx-log-out mr-1"></i>Thoát</button>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTable />
            </Body>
        </div>
    )
}

export default MaChuong