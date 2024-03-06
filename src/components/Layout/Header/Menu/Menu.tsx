import { BiCog, BiCopyAlt, BiFoodMenu, BiLayer, BiLogOut, BiLogoInternetExplorer, BiRecycle, BiSolidAmbulance, BiSolidArchiveOut, BiSolidBook, BiSolidLayer, BiSolidUser, BiSolidUserCircle } from "react-icons/bi";

export interface Children {
    url?: string;
    title: string;
    icon: JSX.Element;
}

export interface MenuData {
    icon: any;
    title: string,
    url?: string;
    children?: {
        icon: any
        title: string;
        url?: string;
        children?: Children[]
    }[]
}

export const IMenuData: MenuData[] = [
    {
        icon: <BiCog className='first-icon' />,
        title: 'Hệ thống',
        children: [
            {
                icon: <BiSolidUserCircle className='second-icon'/>,
                title: 'Đăng nhập hệ thống',
                url: '/dangNhapHeThong'
            },
            {
                icon: <BiLogOut className='second-icon'/>,
                title: 'Ra khỏi hệ thống',
                url: '/raKhoiHeThong'
            },
            {
                icon: <BiFoodMenu className='second-icon'/>,
                title: 'Tham số hệ thống',
            },
            {
                icon: <BiSolidUser className='second-icon'/>,
                title: 'Quản trị hệ thống',
                children: [
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Quản lý người sử dụng',
                        url: './quantriHT/quanLyNSD'
                    },
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Quản lý nhóm người sử dụng',
                        url: './quantriHT/quanLyNhomNSD'
                    },
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phân nhóm NSD',
                        url: './quantriHT/quanLyPhanNhomNSD'
                    },
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phân quyền chức năng',
                        url: './quantriHT/quanLyPhanQuyenCN'
                    },
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Quản lý phê duyệt người sử dụng',
                        url: './quantriHT/quanLyPheDuyetNSD'
                    },
                ]
            },
            {
                icon: <BiSolidArchiveOut className='second-icon'/>,
                title: 'Tiện ích',
                children: [
                    {
                        icon: <BiCog className='third-icon' />,
                        title: 'Lịch sử tra cứu thông tin tờ khai'
                    },
                ]
            },
        ]
    },
    {
        icon: <BiSolidBook className='first-icon'/>,
        title: 'Danh mục',
        children: [
            {
                icon: <BiCopyAlt className='second-icon'/>,
                title: 'Danh mục Mã chương'
            },
            {
                icon: <BiCopyAlt className='second-icon'/>,
                title: 'Danh mục Mã nội dung kinh tế'
            },
            {
                icon: <BiCopyAlt className='second-icon'/>,
                title: 'Danh mục Cơ quan thu'
            },
            {
                icon: <BiCopyAlt className='second-icon'/>,
                title: 'Danh mục Cơ quan kho bạc'
            },
        ]
    },
    {
        icon: <BiLayer className='first-icon'/>,
        title: 'Xử lý chứng từ thuế',
        children: [
            {
                icon: 'any',
                title: 'Lập chứng từ',
                children: [
                    {
                        icon: <BiCog className='second-icon' />,
                        title: 'Lập chứng từ thuế nội địa'
                    },
                    {
                        icon: <BiCog className='second-icon' />,
                        title: 'Lập chứng từ thuế cá nhân'
                    },
                    {
                        icon: <BiCog className='second-icon' />,
                        title: 'Lập chứng từ thuế hải quan',
                        url: '/lapChungTuThueHQ'
                    },
                    {
                        icon: <BiCog className='second-icon' />,
                        title: 'Lập chứng từ phí hạ tầng'
                    },
                    {
                        icon: <BiCog className='second-icon' />,
                        title: 'Lập biên lai thu'
                    },
                ]
            }
        ]
    },
    {
        icon: <BiSolidLayer className='first-icon'/>,
        title: 'Xử lý chứng từ BBN',
        children: [
            {
                icon: 'any',
                title: 'Lập chứng từ BBN'
            },
            {
                icon: 'any',
                title: 'Kiểm soát chứng từ BBN'
            },
            {
                icon: 'any',
                title: 'Tra cứu chứng từ BBN'
            }
        ]
    },
    {
        icon: <BiLogoInternetExplorer className='first-icon'/>,
        title: 'Hải quan điện tử',
        children: [
            {
                icon: 'any',
                title: 'Hải quan online 24/7',
                children: [
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập đăng ký'
                    }
                ]
            }
        ]
    },
    {
        icon: <BiSolidAmbulance className='first-icon'/>,
        title: 'Xử lý cuối ngày',
        children: [
            {
                icon: 'any',
                title: 'Lập bảng kê chứng từ'
            },
            {
                icon: 'any',
                title: 'Tạo bảng kê đối chiếu hải quan'
            },
        ]
    },
    {
        icon:<BiRecycle className='first-icon'/>,
        title: 'Hoàn thuế VAT',
        children: [
            {
                icon: 'any',
                title: 'Lập chứng từ hoàn thuế'
            },
            {
                icon: 'any',
                title: 'Kiểm soát chứng từ hoàn thuế'
            },
        ]
    }
]