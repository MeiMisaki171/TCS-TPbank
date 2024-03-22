import React, { useEffect } from 'react'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import Header from '~/components/Layout/Header'
import '../../DanhMuc/style.css'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook'
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { maChuong } from '~/types/DM/maChuong'
import { deleteById, getAllDMMaChuong } from '~/features/DM/MaChuong/dmMaChuongSlice'
import BasicModal from '~/components/Layout/Body/Modal'
import CreateFormMC from './create/maChuong.create'
import EditFormQG from './update/maChuong.update'
import { useNavigate } from 'react-router-dom'

const MaChuong = () => {

    const dispatch = useAppDispatch();

    const data: maChuong[] = useAppSelector(state => state.danhmuc.data);

    useEffect(() => {
        dispatch(getAllDMMaChuong());
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
                dispatch(getAllDMMaChuong());
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
                        icon={<BasicModal children={<EditFormQG id={id} />} title={<BiEdit className="textPrimary" />} />}
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
                            <div className="col-sm-2">
                                <label className="col-form-label">Chương</label>
                            </div>
                            <div className="col-sm-2">
                                {/* onChange={Filter}s */}
                                <input type="text" className="form-control" id="inputEnterYourMa" placeholder="Nhập mã LHXNK" />
                            </div>
                            <div className="col-sm-2">
                                <label className="col-form-label">Tên</label>
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="inputEnterYourName" placeholder="Nhập tên LHXNK" />
                            </div>
                            <div className="col-sm-2">
                                <label className="col-form-label">Tình trạng</label>
                            </div>
                            <div className="col-sm-2">
                                <input type="text" className="form-control" id="inputEnterYourName1" placeholder="Nhập tên viết tắt LHXNK" />
                            </div>
                        </div>

                        <hr></hr>
                        <div className="row mb-3 text-center">
                            <div className="col-sm-12">
                                <button type="button" className="btn crud-btn px-5 radius-30" >
                                    <i className="fadeIn animated bx bx-search-alt mr-1"></i>
                                    Tìm kiếm
                                </button>
                                <button type="button" className="btn crud-btn px-5 radius-30">
                                    <i className="fadeIn animated bx bx-search-alt mr-1"></i>
                                    <BasicModal children={<CreateFormMC />} title={'Thêm mới'} />
                                </button>
                                <button type="button" className="btn crud-btn px-5 radius-30" >
                                    <i className="fadeIn animated bx bx-eraser mr-1"></i>
                                    Xoá
                                </button>
                                <button type="button" className="btn crud-btn px-5 radius-30" onClick={exitPage}>
                                    <i className="fadeIn animated bx bx-log-out mr-1"></i>
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

export default MaChuong