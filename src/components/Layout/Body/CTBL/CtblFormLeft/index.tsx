import React from 'react'
import './style.css'
import Button from '~/components/Button'
import { BiRefresh } from 'react-icons/bi'
const CtblFormLeft = () => {

    const buttonTitle = 'Refresh';
    const btnPrimary = 'primary';

    return (
        <div className='p-4 border rounded box-ctbl1'>
            <h6>Số CT | Mã NV/SBT</h6>
            <hr></hr>
            <div className='table-responsive mb-4 '>
                <table className='table mb-0 table-hover '>
                    <thead className='table-light'>
                        <tr>
                            <th className='box-ctbl1'>Số CT</th>
                            <th className='box-ctbl1'>Số BT</th>
                            <th className='box-ctbl1'>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='box-ctbl1'>
                                <input type='text' className='form-control' placeholder='Nhập Số CT'></input>
                            </td>
                            <td className='box-ctbl1'>
                                <input type='text' className='form-control' placeholder='Nhập Số BT'></input>
                            </td>
                            <td className='box-ctbl1'>
                                <select className='form-select'>
                                    <option value="default">Tất cả...</option>
                                    <option value="1">Trạng thái 1</option>
                                    <option value="2">Trạng thái 2</option>
                                    <option value="3">Trạng thái 3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row mb-2 text-center'>
                <div className='d-flex justify-content-center col-sm-12'>
                    <Button icon={<BiRefresh />} title={buttonTitle} btnStyle={btnPrimary} />
                </div>
            </div>
        </div>
    )
}

export default CtblFormLeft