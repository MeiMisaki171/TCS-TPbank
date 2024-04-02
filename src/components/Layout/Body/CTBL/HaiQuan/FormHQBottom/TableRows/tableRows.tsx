import React, { ChangeEvent } from 'react'
import { BiTrash } from 'react-icons/bi';
import { DetailChungTu } from '~/types/ChungTu/detailChungTu'

interface IDetailChungTu {
    rows: DetailChungTu[];
    handleValUpdate: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleDelRow: (index: number) => void
}

const TableRows: React.FC<IDetailChungTu> = ({ rows, handleValUpdate, handleDelRow }: IDetailChungTu) => {
    return (
        <>
            {rows.map((item, index) => {
                const { STK, ngayTK, lhxnk, ndkt, tenNdkt, soTien, soTienVnd }: DetailChungTu = item
                return (
                    <tr key={rows.indexOf(item)}>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                name='STK'
                                value={STK}
                                onChange={event => handleValUpdate(index, event)}
                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                name='ngayTK'
                                value={ngayTK}
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={lhxnk}
                                name='lhxnk'
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={ndkt}
                                name='ndkt'
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={tenNdkt}
                                name='tenNdkt'
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={soTien}
                                name='soTien'
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={soTienVnd}
                                name='soTienVnd'
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <BiTrash onClick={() => { handleDelRow(index) }}></BiTrash>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}

export default TableRows