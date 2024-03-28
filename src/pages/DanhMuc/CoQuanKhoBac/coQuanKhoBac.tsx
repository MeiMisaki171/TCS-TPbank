import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import { useEffect } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import BasicModal from '~/components/Layout/Body/Modal/basic'
import Header from '~/components/Layout/Header'
import { deleteById, getAllDmCQKB } from '~/features/DM/CoQuanKhoBac/dmCoQuanKhoBacSlide'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook'
import { ICoQuanKB } from '~/types/DM/coQuanKhoBac'
import EditFormCQKB from './update/cqkb.update'
import CreateFormCQKB from './create/cqkb.create'
import { useNavigate } from 'react-router-dom'
import '../../DanhMuc/style.css'
import MaNganHangSearch from '~/components/Layout/Body/Modal/MaNganHang/searchForm'


const CoQuanKhoBac = () => {

    const dispatch = useAppDispatch();

    const data: ICoQuanKB[] = useAppSelector(state => state.danhmuc.data);

    useEffect(() => {
        dispatch(getAllDmCQKB());
    }, [dispatch])


    //Format lại data
    let newData = data.map(item => {
        let newItem = { ...item };
        if (item.tinhTrang === true) {
            newItem.tinhTrang = "Hiệu lực"
        } else {
            newItem.tinhTrang = "Hết hiệu lực"
        }
        return newItem;
    });

    // const [result, setResult] = useState(newData);

    // const Filter = (event: any) => {
    //     setResult(newData.filter(result => result.maQG.includes(event.target.value.toUpperCase())));
    // }

    //Xóa hàng
    const handleDeleteRow = (id: any) => {
        dispatch(deleteById(id)).then(
            response => {
                dispatch(getAllDmCQKB());
            }
        )
    }

    // Thoat
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
                        icon={<BasicModal children={<EditFormCQKB id={id} />} title={<BiEdit className="textPrimary" />} />}
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
                        <div className="row mb-5">
                            <div className="col-sm-4 d-flex ">
                                <label style={{ width: '200px' }} className="col-form-label">Số hiệu kho bạc</label>
                                <input type="text" className="form-control" id="inputEnterYourMa" placeholder="" />
                            </div>
                            <div className="col-sm-4 d-flex ">
                                <label style={{ width: '200px' }} className="col-form-label ">Tên kho bạc</label>
                                <input type="text" className="form-control" id="inputEnterYourName" placeholder="" />
                            </div>
                            <div className="col-sm-4 d-flex ">
                                <label style={{ width: '200px' }} className="col-form-label ">Mã ĐBHC</label>
                                <input type="text" className="form-control" id="inputEnterYourName1" placeholder="" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-4 d-flex ">
                                <label style={{ width: '200px' }} className="col-form-label ">Mã tài khoản</label>
                                <input type="text" className="form-control" id="inputEnterYourName1" placeholder="" />
                            </div>
                            <div className="col-sm-4 d-flex" style={{ position: 'relative' }}>
                                <label style={{ width: '200px' }} className="col-form-label ">Mã ngân hàng</label>
                                <input type="text" style={{ width: '80%' }} className="form-control" id="inputEnterYourName1" placeholder="" />
                                <MaNganHangSearch></MaNganHangSearch>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="row mb-3 text-center">
                            <div className="col-sm-12">
                                <button type="button" className="crud-btn px-5 py-1" >
                                    Tìm kiếm
                                </button>
                                <button type="button" className=" crud-btn">
                                    <BasicModal children={<CreateFormCQKB />} title={'Thêm mới'} styles='px-5 py-1' />
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
                <DataTable data={newData} tableHeader={tableHeader} />
            </Body>
        </div>
    )
}

export default CoQuanKhoBac