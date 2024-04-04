import React, { ChangeEvent, useState } from 'react'
import { DetailChungTuND } from '~/types/ChungTu/detailChungTuND'
import CardTitle from '../../../CardTitle';
import { BiSolidAddToQueue } from 'react-icons/bi';
import CtuNdDetailTable from './ctuNdDetailTable/ctuNdDetailTable';

const ChungTuNdDetail = () => {
    const title: string = 'Thông tin chi tiết'
    const [rows, initRow] = useState<DetailChungTuND[]>([
        {
            chuong: '',
            ndkt: '',
            noiDung: '',
            soTien: '',
            soTienVnd: '',
            kyThue: '',
        }
    ]);

    const addRowTable = () => {
        const data: DetailChungTuND = {
            chuong: '',
            ndkt: '',
            noiDung: '',
            soTien: '',
            soTienVnd: '',
            kyThue: '',
        };
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
                    <div onClick={addRowTable}><BiSolidAddToQueue></BiSolidAddToQueue></div>
                </div>
                <hr style={{ marginTop: '0' }}></hr>
                <div className='table-responsive'>
                    <table className="table mb-0 table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>Chương</th>
                                <th>NDKT</th>
                                <th>Nội dung</th>
                                <th>Số tiền</th>
                                <th>Số tiền(VND)</th>
                                <th>Kỳ thuế</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CtuNdDetailTable
                                rows={rows}
                                handleValUpdate={handleValUpdate}
                                handleDelRow={handleDelRow}
                            ></CtuNdDetailTable>
                        </tbody>
                    </table>
                    <button onClick={submitForm}>Click</button>
                </div>
            </div>
        </div>
    )
}

export default ChungTuNdDetail