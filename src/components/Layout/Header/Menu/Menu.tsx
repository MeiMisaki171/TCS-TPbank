// import { BiBookOpen, BiCog, BiCopyAlt, BiFoodMenu, BiIdCard, BiLayer, BiLogOut, BiLogoInternetExplorer, BiPencil, BiRecycle, BiSearchAlt, BiSolidAmbulance, BiSolidArch, BiSolidArchiveOut, BiSolidBank, BiSolidBook, BiSolidCopyAlt, BiSolidCopyright, BiSolidFoodMenu, BiSolidLayer, BiSolidUser, BiSolidUserCircle } from "react-icons/bi";

export interface Children {
    url?: string;
    title: string;
    id?: string;
    // icon?: JSX.Element;
}

export interface MenuData {
    // icon?: any;
    id?: string;
    title: string,
    url?: string;
    children?: {
        // icon?: any
        id?: string; //  
        title: string;
        url?: string;
        children?: Children[]
    }[]
}

// Nhập dữ liệu của thanh Menu tại đây
export const IMenuData: MenuData[] = [
    {
        // icon: <BiCog className='first-icon' />,
        title: 'Hệ thống',
        children: [
            {
                // icon: <BiSolidUserCircle className='second-icon' />,
                title: 'Đăng nhập hệ thống',
                url: '/dangNhapHeThong'
            },
            {
                // icon: <BiLogOut className='second-icon' />,
                title: 'Ra khỏi hệ thống',
                url: '/raKhoiHeThong'
            },
            {
                // icon: <BiFoodMenu className='second-icon' />,
                title: 'Tham số hệ thống',
            },
            {
                // icon: <BiSolidUser className='second-icon' />,
                title: 'Quản trị hệ thống',
                children: [
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Quản lý người sử dụng',
                        url: './quantriHT/quanLyNSD'
                    },
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Quản lý nhóm người sử dụng',
                        url: './quantriHT/quanLyNhomNSD'
                    },
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phân nhóm NSD',
                        url: './quantriHT/quanLyPhanNhomNSD'
                    },
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phân quyền chức năng',
                        url: './quantriHT/quanLyPhanQuyenCN'
                    },
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phê duyệt người sử dụng',
                        url: './quantriHT/quanLyPheDuyetNSD'
                    },
                ]
            },
            {
                // icon: <BiSolidArchiveOut className='second-icon' />,
                title: 'Tiện ích',
                children: [
                    {
                        // icon: <BiCog className='third-icon' />,
                        title: 'Lịch sử tra cứu thông tin tờ khai'
                    },
                ]
            },
        ]
    },
    {
        // icon: <BiSolidBook className='first-icon' />,
        title: 'Danh mục',
        children: [
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '1.',
                title: 'Danh mục Mã chương',
                url: '/danhmuc/machuong'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '2.',
                title: 'Danh mục Mã nội dung kinh tế',
                url: '/danhmuc/NDKT'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '3.',
                title: 'Danh mục Cơ quan thu',
                url: '/danhmuc/CQT'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '4.',
                title: 'Danh mục Cơ quan kho bạc',
                url: '/danhmuc/CQKB'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '5.',
                title: 'Danh mục Địa bàn hành chính',
                url: '/danhmuc/DBHC'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '6.',
                title: 'Danh mục Tài khoản',
                url: '/danhmuc/taiKhoan'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '7.',
                title: 'Danh mục Ngân hàng',
                url: '/danhmuc/nganHang'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '8.',
                title: 'Danh mục Loại thuế',
                url: '/danhmuc/loaiThue'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '9.',
                title: 'Danh mục Ngân hàng kết xuất',
                url: '/danhmuc/NHKX'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '10.',
                title: 'Danh mục Mã phí',
                url: '/danhmuc/maPhi'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '11.',
                title: 'Danh mục Kênh thu',
                url: '/danhmuc/kenhThu'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '12.',
                title: 'Danh mục Hải quan',
                url: '/danhmuc/haiQuan'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '13.',
                title: 'Danh mục Loại hình XNK',
                url: '/danhmuc/loaiHinhXNK'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '14.',
                title: 'Danh mục Mã NHTH',
                url: '/danhmuc/maNHTH'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '15.',
                title: 'Danh mục Loại phí HT',
                url: '/danhmuc/loaiPhiHT'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '16.',
                title: 'Danh mục Đơn vị thu phí HT cảng biển',
                url: '/danhmuc/HTcangbien'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '17.',
                title: 'Danh mục Kho bạc ủy quyền',
                url: '/danhmuc/kbuq'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '18.',
                title: 'Danh mục Loại hình thu- Biên lai thu',
                url: '/danhmuc/lhtBlt'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '19.',
                title: 'Danh mục Cơ quan quyết định- Biên lai thu',
                url: '/danhmuc/cqqdBlt'
            },
            {
                // icon: <BiCopyAlt className='second-icon' />,
                id: '20.',
                title: 'Ngày làm việc',
                url: '/danhmuc/ngayLamViec'
            },
        ]
    },
    {
        // icon: <BiLayer className='first-icon' />,
        title: 'Xử lý chứng từ thuế',
        children: [
            {
                // icon: <BiSolidFoodMenu className='second-icon' />,
                title: 'Lập chứng từ',
                children: [
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập chứng từ thuế nội địa',
                        url: '/lapChungTuThueND'
                    },
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập chứng từ thuế cá nhân',
                        url: '/lapChungTuThueCN'
                    },
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập chứng từ thuế hải quan',
                        url: '/lapChungTuThueHQ'
                    },
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập chứng từ phí hạ tầng',
                        url: '/lapChungTuPhiHT'
                    },
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập biên lai thu',
                        url: '/lapBienLaiThu'
                    },
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập chứng từ liên ngân hàng',
                        url: '/lapCtuLNH'
                    },
                ]
            },
            {
                // icon: <BiBookOpen className='second-icon' />,
                title: 'Kiểm soát chứng từ'
            },
            {
                // icon: <BiSearchAlt className='second-icon' />,
                title: 'Tra cứu chứng từ'
            },
            {
                // icon: <BiSearchAlt className='second-icon' />,
                title: 'Tra cứu thông tin tờ khai HQ'
            },
            {
                // icon: <BiIdCard className='second-icon' />,
                title: 'Xử lý bảo lãnh hải quan',
                children: [
                    {
                        // icon: <BiPencil className='third-icon' />,
                        title: 'Lập bảo lãnh hải quan',
                        url: '/lapBaoLanhHaiQuan'
                    },
                    {
                        // icon: <BiBookOpen className='third-icon' />,
                        title: 'Kiểm soát bảo lãnh hải quan',
                        url: '/lapBaoLanhHaiQuan'
                    },
                    {
                        // icon: <BiSearchAlt className='third-icon' />,
                        title: 'Tra cứu bảo lãnh hải quan',
                        url: '/lapBaoLanhHaiQuan'
                    }
                ]
            },
            {
                // icon: <BiSearchAlt className='second-icon' />,
                title: 'Tra cứu thông tin đăng ký thuế theo số CMT'
            },
            {
                // icon: <BiSearchAlt className='second-icon' />,
                title: 'Tra cứu chứng từ phí hạ tầng'
            },
        ]
    },
    {
        // icon: <BiSolidLayer className='first-icon' />,
        title: 'Xử lý chứng từ BBN',
        children: [
            {
                // icon: <BiPencil className="second-icon" />,
                title: 'Lập chứng từ BBN',
                url: '/lapChungTuBBN'
            },
            {
                // icon: <BiBookOpen className='second-icon' />,
                title: 'Kiểm soát chứng từ BBN',
                url: '/kiemSoatChungTuBBN'
            },
            {
                // icon: <BiSearchAlt className='second-icon' />,
                title: 'Tra cứu chứng từ BBN',
                url: '/traCuuChungTuBBN'
            }
        ]
    },
    {
        // icon: <BiLogoInternetExplorer className='first-icon' />,
        title: 'Hải quan điện tử',
        children: [
            {
                // icon: <BiSolidArch className='second-icon' />,
                title: 'Hải quan online 24/7',
                children: [
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Lập đăng ký(KH đã ĐK tại HQ)',
                        url: '/lapDangKyDaDK'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Lập đăng ký(KH chưa ĐK tại HQ)',
                        url: '/lapDangKyChuaDK'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Thay đổi thông tin đăng ký khách hàng',
                        url: '/thayDoiThongTinDKKH'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Duyệt đăng ký/ thay đổi khách hàng',
                        url: '/duyetDangKy'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Tra cứu đăng ký khách hàng',
                        url: '/traCuuDangKy'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Tra cứu chứng nhận từ HQ',
                        url: '/traCuuChungNhan'
                    },
                ]
            },
            {
                // icon: <BiSolidBank className='second-icon' />,
                title: 'Hải quan điện tử DNNT',
                children: [
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Đăng ký khách hàng DNNT',
                        url: '/dangKyKHDNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Duyệt đăng ký khách hàng DNNT',
                        url: '/duyetDangKyKHDNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Tra cứu đăng ký khách hàng DNNT',
                        url: '/traCuuDangKyKHDNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Báo cáo tổng hợp các giao dịch nộp thuế, phí DNNT',
                        url: '/baoCaoTHGDTPDNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Báo cáo tổng hợp khách hàng sử dụng dịch vụ DNNT',
                        url: '/baoCaoTHKHSDDVDNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Tra cứu thông tin NNT đăng ký ủy quyền TCHQ',
                        url: '/traCuuThongTinNNT'
                    },
                    {
                        // icon: <BiCog className='dd-items' />,
                        title: 'Tra cứu chứng từ nhận từ HQ',
                        url: '/traCuuChungTuNhanTuHQ'
                    },
                ]
            }
        ]
    },
    {
        // icon: <BiSolidAmbulance className='first-icon' />,
        title: 'Xử lý cuối ngày',
        children: [
            {
                // icon: <BiPencil className='second-icon' />,
                title: 'Lập bảng kê chứng từ',
                url: '/lapBangKe'
            },
            {
                // icon: <BiSolidCopyAlt className='second-icon' />,
                title: 'Tạo bảng kê đối chiếu hải quan',
                url: '/taoBangKeDoiChieuHQ'
            },
            {
                // icon: <BiSolidCopyright className='second-icon' />,
                title: 'Hải quan online',
                children: [
                    {
                        // icon: <BiCopyAlt className='third-icon' />,
                        title: 'Báo cáo đối chiếu chứng từ với TCHQ',
                        url: '/baoCaoDoiChieuCT'
                    },
                    {
                        // icon: <BiCopyAlt className='third-icon' />,
                        title: 'Báo cáo đối chiếu bảo lãnh với TCHQ',
                        url: '/baoCaoDoiChieuBaoLanh'
                    },
                    {
                        // icon: <BiCopyAlt className='third-icon' />,
                        title: 'Báo cáo đối chiếu ban bộ ngành với TCHQ',
                        url: '/baoCaoDoiChieuBBN'
                    },
                ]
            },
            {
                // icon: 'any',
                title: 'Báo cáo chứng từ',
                url: '/baoCaoChungTu'
            },
            {
                // icon: 'any',
                title: 'Hải quan 247',
                children: [
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Tạo bảng kê đối chiếu hải quan 247',
                        url: '/taoBangKeDoiChieuHQ247'
                    },
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Báo cáo đối chiếu chứng từ hải quan 247',
                        url: '/baoCaoDoiChieuCTHQ247'
                    },
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Báo cáo tổng hợp các giao dịch nộp thuế, phí HQĐT',
                        url: '/baoCaoTongHopThuePhi'
                    },
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Báo cáo tổng hợp khách hàng sử dụng dịch vụ HQĐT',
                        url: '/baoCaoTongHopKH'
                    },
                ]
            },
            {
                // icon: 'any',
                title: 'Hải quan phí hạ tầng',
                children: [
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Tạo bảng kê đối chiếu',
                        url: '/taoBangKeDoiChieu'
                    },
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Báo cáo đối chiếu',
                        url: '/baoCaoDoiChieu'
                    },
                    {
                        // icon: <BiCopyAlt className='second-icon' />,
                        title: 'Báo cáo tổng hợp các giao dịch nộp phí hạ tầng',
                        url: '/baoCaoTongHopGiaoDichPHT'
                    },
                ]
            },
        ]
    },
    {
        // icon: <BiRecycle className='first-icon' />,
        title: 'Hoàn thuế VAT',
        children: [
            {
                // icon: 'any',
                title: 'Lập chứng từ hoàn thuế'
            },
            {
                // icon: 'any',
                title: 'Kiểm soát chứng từ hoàn thuế'
            },
        ]
    }
]