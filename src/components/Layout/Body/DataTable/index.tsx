import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import './style.css'
import { BiAlarm } from 'react-icons/bi';

export interface dataTable {
    maQG: string;
    ten: string;
    tinhTrang: boolean | string;
    createdBy?: string;
    updatedBy?: string;
    createdDate?: string;
    updatedDate?: string;
}

interface DataTableProps {
    data: dataTable[]
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {

    data.forEach(item => {
        if (item.tinhTrang === true) {
            item.tinhTrang = 'Hieu luc';
        } else {
            item.tinhTrang = "Het hieu luc"
        }
    })

    const handleEditClick = (id: any) => {
        console.log(id)
    }



    const columns: GridColDef[] = [
        { field: 'maQG', headerName: 'Mã Quốc gia', width: 160 },
        { field: 'ten', headerName: 'Tên', width: 190 },
        { field: 'tinhTrang', headerName: 'Tình Trạng', width: 130, },
        {
            field: 'actions', headerName: 'Sua', width: 130, type: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<BiAlarm />}
                        label="Edit"
                        className="textPrimary"
                        onClick={() => {
                            handleEditClick(id)
                        }}
                        color="inherit"
                    />,
                ]
            }
        }
    ];

    return (
        <div className='row'>
            <div className='col-xl-12 mx-auto'>
                <div className='card border-top border-0 border-2 border-danger border-datatable'>
                    <div className='card-body'>
                        <div>
                            <div className='card-title d-flex align-items-center'>
                                <div>Icon</div>
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
                                onRowSelectionModelChange={item => console.log(item)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataTable