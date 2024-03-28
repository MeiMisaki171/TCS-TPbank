import React from 'react'
import CardTitle from '../../CardTitle'
import { BiSolidTrash } from 'react-icons/bi'

const CtblFormBottom = () => {

    const title: string = 'Thông tin chi tiết (*)'
    return (
        <div>
            <div className='p-4 border rounded box-ctbc1'>
                <CardTitle title={title} />
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
        </div>
    )
}

export default CtblFormBottom