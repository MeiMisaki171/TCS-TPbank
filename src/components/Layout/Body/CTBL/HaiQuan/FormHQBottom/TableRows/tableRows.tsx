import React, { ChangeEvent } from 'react'
import { BiTrash } from 'react-icons/bi';
import { DetailChungTuHQ } from '~/types/ChungTu/detailChungTuHQ'

interface IDetailChungTuHQ {
    rows: DetailChungTuHQ[];
    handleValUpdate: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleDelRow: (index: number) => void
}

const TableRows: React.FC<IDetailChungTuHQ> = ({ rows, handleValUpdate, handleDelRow }: IDetailChungTuHQ) => {
    return (
        <>
            {rows.map((item: DetailChungTuHQ, index: number) => {
                const { STK, ngayTK, lhxnk, ndkt, tenNdkt, soTien, soTienVnd }: DetailChungTuHQ = item
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