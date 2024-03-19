import { DataGrid, GridActionsCellItem, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import './style.css'
import { BiAlarm, BiFolder, BiRecycle } from 'react-icons/bi';
import { deleteMaChuong } from '~/services/DM/maChuong.service';
import { useAppDispatch } from '~/hook/hook';
import { deleteById } from '~/redux/danhmucSlice';

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
    data: dataTable[],
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {

    let customData = data.map(item => {
        let newItem = { ...item };
        if (item.tinhTrang === true) {
            newItem.tinhTrang = "Hiệu lực"
        } else {
            newItem.tinhTrang = "Hết hiệu lực"
        }
        return newItem;
    })


    console.log(customData)
    const dispatch = useAppDispatch()

    const handleEditClick = (maQG: any) => {
        dispatch(deleteById(maQG))
    }

    const handleCheckBox = (item: GridRowSelectionModel) => {
        console.log(item)
    }

    const columns: GridColDef[] = [
        { field: 'maQG', headerName: 'Mã Quốc gia', width: 360, headerAlign: 'center', align: 'center' },
        { field: 'ten', headerName: 'Tên', width: 400, headerAlign: 'center', align: 'center' },
        { field: 'tinhTrang', headerName: 'Tình Trạng', width: 430, headerAlign: 'center', align: 'center' },
        {
            field: 'actions', headerName: 'Sua', width: 430, type: 'actions', headerAlign: 'center', align: 'center',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<BiAlarm />}
                        label="Edit"
                        className="textPrimary"
                        onClick={() => {
                            handleEditClick(id);
                        }}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<BiRecycle />}
                        label="Edit"
                        className="textPrimary"
                        onClick={() => {
                            handleEditClick(id);
                        }}
                        color="inherit"
                    />
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
                                <div className='result-search_icon'><BiFolder /></div>
                                <h5 className='mb-0 dt-title'>Kết quả tìm kiếm</h5>
                            </div>
                        </div>
                        <div>
                            <DataGrid
                                getRowId={row => row.maQG}
                                rows={customData}
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