import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import React, { useEffect } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import BasicModal from '~/components/Layout/Body/Modal/basic'
import Header from '~/components/Layout/Header'
import { deleteById, getAllMaNDKT } from '~/features/DM/MaNDKT/dmMaNDKTSlice'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook'
import { ImaNDKT } from '~/types/DM/maNDKT'
import CreateFormNDKT from './create/maNdkt.create'
import EditFormNDKT from './update/maNdkt.update'
import { useNavigate } from 'react-router-dom'
import '../../DanhMuc/style.css'


const MaNdkt = () => {

    const dispatch = useAppDispatch();

    const data: ImaNDKT[] = useAppSelector(state => state.danhmuc.data);

    useEffect(() => {
        dispatch(getAllMaNDKT());
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
                dispatch(getAllMaNDKT());
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
                        icon={<BasicModal children={<EditFormNDKT id={id} />} title={<BiEdit className="textPrimary" />} />}
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
                            <form className='d-flex'>
                                <div className="col-sm-2 d-flex justify-content-center">
                                    <label className="col-form-label">Mã nội dung kinh tế</label>
                                </div>
                                <div className="col-sm-2 ">
                                    <input type="text" className="form-control" id="inputEnterYourMa" placeholder="" />
                                </div>
                                <div className="col-sm-2">
                                    <label className="col-form-label d-flex justify-content-center">Tên nội dung kinh tế</label>
                                </div>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control" id="inputEnterYourName" placeholder="" />
                                </div>
                                <div className="col-sm-2">
                                    <label className="col-form-label d-flex justify-content-center">Tình trạng</label>
                                </div>
                                <div className="col-sm-2">
                                    <select name='tinhTrang' defaultValue='null' className='form-select'>
                                        <option value='null'>Tất cả</option>
                                        <option value='True'>Hiệu lực</option>
                                        <option value='False'>Hết hiệu lực</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <hr></hr>
                        <div className="row mb-3 text-center">
                            <div className="col-sm-12">
                                <button type="button" className="crud-btn px-5 py-1" >
                                    Tìm kiếm
                                </button>

                                <button type="button" className='crud-btn'>
                                    <BasicModal children={<CreateFormNDKT />} title={'Thêm mới'} styles='px-5 py-1' />
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

export default MaNdkt