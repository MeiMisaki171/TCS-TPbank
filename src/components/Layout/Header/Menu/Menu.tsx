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
        icon: <BiCog className='dd-items' />,
        title: 'Hệ thống',
        children: [
            {
                icon: <BiSolidUserCircle className='dd-items'/>,
                title: 'Đăng nhập hệ thống',
                url: '/dangNhapHeThong'
            },
            {
                icon: <BiLogOut className='dd-items'/>,
                title: 'Ra khỏi hệ thống',
                url: '/raKhoiHeThong'
            },
            {
                icon: <BiFoodMenu className='dd-items'/>,
                title: 'Tham số hệ thống',
            },
            {
                icon: <BiSolidUser className='dd-items'/>,
                title: 'Quản trị hệ thống',
                children: [
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý người sử dụng',
                        url: './quantriHT/quanLyNSD'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý nhóm người sử dụng',
                        url: './quantriHT/quanLyNhomNSD'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phân nhóm NSD',
                        url: './quantriHT/quanLyPhanNhomNSD'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phân quyền chức năng',
                        url: './quantriHT/quanLyPhanQuyenCN'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phê duyệt người sử dụng',
                        url: './quantriHT/quanLyPheDuyetNSD'
                    },
                ]
            },
            {
                icon: <BiSolidArchiveOut className='dd-items'/>,
                title: 'Tiện ích',
                children: [
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lịch sử tra cứu thông tin tờ khai'
                    },
                ]
            },
        ]
    },
    {
        icon: <BiSolidBook className='dd-items'/>,
        title: 'Danh mục',
        children: [
            {
                icon: <BiCopyAlt className='dd-items'/>,
                title: 'Danh mục Mã chương'
            },
            {
                icon: <BiCopyAlt className='dd-items'/>,
                title: 'Danh mục Mã nội dung kinh tế'
            },
            {
                icon: <BiCopyAlt className='dd-items'/>,
                title: 'Danh mục Cơ quan thu'
            },
            {
                icon: <BiCopyAlt className='dd-items'/>,
                title: 'Danh mục Cơ quan kho bạc'
            },
        ]
    },
    {
        icon: <BiLayer className='dd-items'/>,
        title: 'Xử lý chứng từ thuế',
        children: [
            {
                icon: 'any',
                title: 'Lập chứng từ',
                children: [
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập chứng từ thuế nội địa'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập chứng từ thuế cá nhân'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập chứng từ thuế hải quan',
                        url: '/lapChungTuThueHQ'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập chứng từ phí hạ tầng'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Lập biên lai thu'
                    },
                ]
            }
        ]
    },
    {
        icon: <BiSolidLayer className='dd-items'/>,
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
        icon: <BiLogoInternetExplorer className='dd-items'/>,
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
        icon: <BiSolidAmbulance className='dd-items'/>,
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
        icon:<BiRecycle className='dd-items'/>,
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