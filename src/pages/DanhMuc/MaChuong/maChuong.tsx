import { useEffect } from 'react'
import Body from '~/components/Layout/Body'
import DataTable from '~/components/Layout/Body/DataTable'
import Header from '~/components/Layout/Header'
import '../../DanhMuc/style.css'
import { useAppDispatch, useAppSelector } from '~/hook/redux-hook'
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { maChuong } from '~/types/DM/maChuong'
import { deleteById, getAllDMMaChuong } from '~/features/DM/MaChuong/dmMaChuongSlice'
import BasicModal from '~/components/Layout/Body/Modal/basic'
import CreateFormMC from './create/maChuong.create'
import EditFormQG from './update/maChuong.update'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const MaChuong = () => {

    const dispatch = useAppDispatch();

    const data: maChuong[] = useAppSelector(state => state.danhmuc.data);
    // const [resultSearch, setResultSearch] = useState<maChuong[]>();
    // const [searching, setSearching] = useState<boolean>(false);
    const [searchForm, setSearchForm] = React.useState<any>(
        {
            maQG: '',
            ten: '',
            tinhTrang: true
        }
    )

    //call API getAll
    useEffect(() => {
        dispatch(getAllDMMaChuong());
    }, [dispatch])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearchForm({ ...searchForm, [name]: value })
    }

    const handleSubmitSearchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }



    // const Filter = () => {
    //     // setResultSearch(data.filter(result => result.maQG.toLowerCase().includes(searchForm.maQG.toLowerCase())));
    //     // setSearching(true);
    //     let tempArr: Array<any> = []
    //     data.filter((item: any) => {
    //         return Object.keys(searchForm).every(key => {
    //             if (item[key].toUpperCase().includes(searchForm[key].toUpperCase())) {
    //                 tempArr.push(item);
    //             };
    //             return 0;
    //         })
    //     })
    //     console.log(searchForm);
    //     setResultSearch(tempArr);
    //     setSearching(true)
    // }


    //Xóa hàng
    const handleDeleteRow = (id: string) => {
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
                            <form onSubmit={handleSubmitSearchForm} className='d-flex'>
                                <div className="col-sm-2">
                                    <label className="col-form-label d-flex justify-content-center">Chương</label>
                                </div>
                                <div className="col-sm-2">
                                    <input type="text" name='maQG' className="form-control" id="inputEnterYourMa" placeholder="Nhập mã chương" onChange={handleInputChange} />
                                </div>
                                <div className="col-sm-2">
                                    <label className="col-form-label d-flex justify-content-center" >Tên</label>
                                </div>
                                <div className="col-sm-2">
                                    <input type="text" name='ten' className="form-control" id="inputEnterYourName" placeholder="Nhập tên chương" onChange={handleInputChange} />
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
                                    <i className="fadeIn animated bx bx-search-alt mr-1"></i>
                                    Tìm kiếm
                                </button>
                                <button type="button" className='crud-btn'>
                                    <BasicModal children={<CreateFormMC />} title={'Thêm mới'} styles={'px-5 py-1'} />
                                </button>
                                <button type="button" className="crud-btn px-5 py-1" >
                                    <i className="fadeIn animated bx bx-eraser mr-1"></i>
                                    Xoá
                                </button>
                                <button type="button" className="crud-btn px-5 py-1" onClick={exitPage}>
                                    <i className="fadeIn animated bx bx-log-out mr-1"></i>
                                    Thoát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTable data={data} tableHeader={tableHeader}></DataTable>
                {/* <DataTable data={searching ? resultSearch : data} tableHeader={tableHeader} /> */}
            </Body>
        </div>
    )
}

export default MaChuong