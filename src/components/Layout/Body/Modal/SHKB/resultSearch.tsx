import React from 'react'
import '../style.css'

const ResultSearch = () => {

    const data = {
        shkb: '0001',
        ten: 'Kho bạc nhà nước'
    }

    return (
        <div className='result-search--container'>
            <div className='search-modal--header'>Danh sách kết quả</div>
            <div>
                <table className='table table-bordered'>

                    <tbody>
                        <tr>
                            <th scope='col'>Số hiệu kho bạc</th>
                            <th scope='col'>Tên kho bạc</th>
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