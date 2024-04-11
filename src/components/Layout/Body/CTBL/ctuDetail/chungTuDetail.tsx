import React, { ChangeEvent, useState } from 'react'
import TableRows from './TableRows/tableRows'
import { DetailChungTuHQ } from '~/types/ChungTu/detailChungTuHQ'
import { BiSolidAddToQueue } from 'react-icons/bi'
import CardTitle from '../../CardTitle'
import { DetailChungTuND } from '~/types/ChungTu/detailChungTuND'
import { DetailChungTuCN } from '~/types/ChungTu/detailChungTuCN'
import { DetailChungTuPhiHT } from '~/types/ChungTu/detailChungTuPhiHT'

interface ctuDetailProps {
    data: DetailChungTuHQ | DetailChungTuND | DetailChungTuCN | DetailChungTuPhiHT,
    initialValue: any,
    header: string[]
}

const ChungTuDetail: React.FC<ctuDetailProps> = ({ data, initialValue, header }: ctuDetailProps) => {

    const title: string = 'Thông tin chi tiết (*)'
    const [rows, initRow] = useState(initialValue);
    const addRowTable = () => {
        initRow([...rows, data]);
    };

    const handleValUpdate = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const data = [...rows];
        (data[index] as any)[name] = value;
        initRow(data);
    }

    const handleDelRow = (index: number) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1);
        initRow(dataRow);
    }

    const submitForm = () => {
        alert(`${JSON.stringify(rows)}`)
    }

    return (
        <div>
            <div className='p-4 border rounded box-ctbc1'>
                <div className='d-flex justify-content-between'>
                    <CardTitle title={title} />
                    <div onClick={addRowTable}><BiSolidAddToQueue /></div>
                </div>
                <hr style={{ marginTop: '0' }}></hr>
                <div className="table-responsive">
                    <table className="table mb-0 table-hover">
                        <thead className="table-light">
                            <tr>
                                {header.map((row: string) => {
                                    return <th key={header.indexOf(row)}>{row}</th>
                                })}

                            </tr>
                        </thead>
                        <tbody>
                            <TableRows
                                rows={rows}
                                handleValUpdate={handleValUpdate}
                                handleDelRow={handleDelRow}
                            ></TableRows>
                        </tbody>
                    </table>
                    <button onClick={submitForm}>Click</button>
                </div>
            </div>
        </div>
    )
}

export default ChungTuDetail