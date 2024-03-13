import React from 'react'
import { dataTable } from '~/components/Layout/Body/DataTable'
import { createMaChuong } from '~/services/DM/maChuong.service'

const CreateNew = () => {

    const newItem: dataTable | undefined = {
        maQG: 'CGV',
        ten: 'Nam',
        tinhTrang: true
    }

    const handleCreateClick = () => {
        createMaChuong(newItem)
    }
    return (
        <form onSubmit={handleCreateClick}>
            <label>Enter your name:
                <input
                    type="text"
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default CreateNew