import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import './style.css'
import { BiFolder } from 'react-icons/bi';
import { dataTable } from '~/types/DM/quocGia';
interface DataTableProps {
    data: dataTable[],
    tableHeader: GridColDef[]
}

const DataTable: React.FC<DataTableProps> = ({ data, tableHeader }) => {

    const handleCheckBox = (item: GridRowSelectionModel) => {
        console.log(item)
    }

    const columns: GridColDef[] = tableHeader

    return (
        <div className='row'>
            <div className='col-xl-12 mx-auto'>
                <div className='card border-top border-0 border-2 border-danger border-datatable'>
                    <div className='card-body'>
                        <div>
                            <div className='card-title d-flex align-items-center'>
                                <div className='result-search_icon'><BiFolder /></div>
                                <h5 className='mb-0 dt-title'>Kết quả tìm kiếm</h5>
                            </div>
                        </div>
                        <div>
                            <DataGrid
                                getRowId={row => row.maQG}
                                rows={data}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                                onRowSelectionModelChange={(item) => {
                                    handleCheckBox(item)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTable