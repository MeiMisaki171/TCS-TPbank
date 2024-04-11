import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import { useEffect } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import BasicModal from '~/components/Layout/Body/Modal/basic'
import Header from '~/components/Layout/Header'
import { deleteById, getAllDmDBHC } from '~/features/DM/DiaBanHanhChinh/dmDBHCSlice'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook'
import { IDbhc } from '~/types/DM/diaBanHanhChinh'
import EditFormDBHC from './update/dbhc.update'
import CreateFormDBHC from './create/dbhc.create'
import { useNavigate } from 'react-router-dom'
import '../../DanhMuc/style.css'


const DiaBanHanhChinh = () => {

    const dispatch = useAppDispatch();

    const data: IDbhc[] = useAppSelector(state => state.danhmuc.data);

    useEffect(() => {
        dispatch(getAllDmDBHC());
    }, [dispatch])

    // const [result, setResult] = useState(newData);

    // const Filter = (event: any) => {
    //     setResult(newData.filter(result => result.maQG.includes(event.target.value.toUpperCase())));
    // }

    //Xóa hàng
    const handleDeleteRow = (id: any) => {
        dispatch(deleteById(id)).then(
            response => {
                dispatch(getAllDmDBHC());
            }
        )
    }

    const navigate = useNavigate();
    const exitPage = () => {
        navigate('/home')
    }

    //Tạo header cho table
    const tableHeader: GridColDef[] = [
        { field: 'maQG', headerName: 'Chương', width: 360, headerAlign: 'center', align: 'center' },
        { field: 'ten', headerName: 'Tên', width: 400, headerAlign: 'center', align: 'center' },
        { field: 'tinhTrang', headerName: 'Tình Trạng', width: 430, headerAlign: 'center', align: 'center' },
        {
            field: 'actions', headerName: 'Thao tác', width: 430, type: 'actions', headerAlign: 'center', align: 'center',
            getActions: ({ id }: any) => {
                return [
                    <GridActionsCellItem
                        icon={<BasicModal children={<EditFormDBHC id={id} />} title={<BiEdit className="textPrimary" />} />}
                        label="Edit"
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<BiTrash className="textPrimary" />}
                        label="Delete"
                        onClick={() => {
                            handleDeleteRow(id);
                        }}
                        color="inherit"
                    />
                ]
            }
        }
    ];

    return (
        <div>
            <Header></Header>
            <Body>
                <div className="card border-top border-0 border-2 border-danger">
                    <div className="card-body">

                        <div className="card-title d-flex align-items-center">
                            <div><i className="fadeIn animated bx bx-search me-1 font-30 text-danger"></i>
                            </div>
                            <h5 className="mb-0 dktk-title">Điều kiện tìm kiếm</h5>
                        </div>
                        <hr></hr>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <div className='d-flex mb-4'>
                                    <label className="col-sm-4 col-form-label d-flex justify-content-center">Mã ĐBHC</label>
                                    <input type="text" style={{ width: '50%' }} className="form-control col-sm-6" id="inputEnterYourMa" placeholder="" />
                                </div>
                                <div className="d-flex">
                                    <label className="col-form-label col-sm-4 d-flex justify-content-center"> Tình trạng</label>
                                    <select name='tinhTrang' defaultValue='null' className='col-sm-8 form-select'>
                                        <option value='null'>Tất cả</option>
                                        <option value='True'>Hiệu lực</option>
                                        <option value='False'>Hết hiệu lực</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex mb-4">
                                    <label className="col-sm-6 col-form-label d-flex justify-content-center">Tên địa bàn hành chính</label>
                                    <input type="text" style={{ width: '50%' }} className="col-sm-6 form-control" id="inputEnterYourName" placeholder="" />
                                </div>
                                <div className="d-flex">
                                    <label className="col-sm-6 col-form-label d-flex justify-content-center">Cấp đơn vị hành chính</label>
                                    <select name='tinhTrang' defaultValue='null' className='col-sm-6 form-select'>
                                        <option value='null'>Tỉnh/Thành phố</option>
                                        <option value='True'>Quận/Huyện</option>
                                        <option value='False'>Phường/Xã</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="row mb-3 text-center">
                            <div className="col-sm-12">
                                <button type="button" className="crud-btn px-5 py-1" >
                                    Tìm kiếm
                                </button>
                                <button type="button" className="crud-btn ">
                                    <BasicModal children={<CreateFormDBHC />} title={'Thêm mới'} styles='px-5 py-1' />
                                </button>
                                <button type="button" className="crud-btn px-5 py-1" >
                                    Xoá
                                </button>
                                <button type="button" className="crud-btn px-5 py-1" onClick={exitPage}>
                                    Thoát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTable data={data} tableHeader={tableHeader} />
            </Body>
        </div>
    )
}

export default DiaBanHanhChinh