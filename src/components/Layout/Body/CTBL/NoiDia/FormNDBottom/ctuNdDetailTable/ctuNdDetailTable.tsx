import React, { ChangeEvent } from 'react'
import { BiTrash } from 'react-icons/bi';
import { DetailChungTuND } from '~/types/ChungTu/detailChungTuND'

interface IDetailChungTuND {
    rows: DetailChungTuND[];
    handleValUpdate: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleDelRow: (index: number) => void;
}

const CtuNdDetailTable: React.FC<IDetailChungTuND> = ({ rows, handleValUpdate, handleDelRow }: IDetailChungTuND) => {
    return (
        <>
            {rows.map((item: DetailChungTuND, index: number) => {
                const { chuong, ndkt, noiDung, soTien, soTienVnd, kyThue }: DetailChungTuND = item
                return (
                    <tr key={rows.indexOf(item)}>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                name='chuong'
                                value={chuong}
                                onChange={event => handleValUpdate(index, event)}
                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                name='ndkt'
                                value={ndkt}
                                onChange={event => handleValUpdate(index, event)}

                            />
                        </td>
                        <td>
                            <input
                                className='form-control'
                                type='text'
                                value={noiDung}
                                name='noiDung'
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
                            <input
                                className='form-control'
                                type='text'
                                value={kyThue}
                                name='kyThue'
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

export default CtuNdDetailTable