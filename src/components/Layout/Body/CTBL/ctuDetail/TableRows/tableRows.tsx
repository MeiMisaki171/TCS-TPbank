import React, { ChangeEvent } from 'react'
import { BiTrash } from 'react-icons/bi';
import { DetailChungTuHQ } from '~/types/ChungTu/detailChungTuHQ'
import { DetailChungTuND } from '~/types/ChungTu/detailChungTuND';

interface IDataTableProps {
    rows: DetailChungTuHQ[] | DetailChungTuND[];
    handleValUpdate: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
    handleDelRow: (index: number) => void;
}

const TableRows: React.FC<IDataTableProps> = ({ rows, handleValUpdate, handleDelRow }: IDataTableProps) => {
    return (
        <>
            {rows.map((
                row: DetailChungTuHQ | DetailChungTuND,
                index: number
            ) => {
                const fields = Object.keys(row)
                return (
                    <tr key={index}>
                        {fields.map((item) => {
                            const value = (row as any)[item]
                            return (
                                <td key={item}>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name={item}
                                        value={value}
                                        onChange={event => handleValUpdate(index, event)}
                                    ></input>
                                </td>
                            )
                        })}

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