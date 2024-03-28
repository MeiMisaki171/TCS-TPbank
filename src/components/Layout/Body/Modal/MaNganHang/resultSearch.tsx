import React from 'react'
import '../style.css'

const ResultSearch = () => {

    const data = {
        shkb: '0001',
        ten: 'Kho bạc nhà nước'
    }

    return (
        <div className='result-search--container'>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <div className='search-modal--header'>Danh sách kết quả</div>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='col'>Mã</th>
                            <th scope='col'>Tên ngân hàng</th>
                            <th scope='col'>Chọn</th>
                        </tr>
                        <tr>
                            <td>{data.shkb}</td>
                            <td>{data.ten}</td>
                            <td>Chọn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultSearch