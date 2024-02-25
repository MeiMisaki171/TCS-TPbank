import { BiCog } from "react-icons/bi";

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
                icon: 'aa',
                title: 'Đăng nhập hệ thống',
                url: '/dangNhapHeThong'
            },
            {
                icon: 'aád',
                title: 'Ra khỏi hệ thống',
                url: '/raKhoiHeThong'
            },
            {
                icon: 'aa',
                title: 'Tham số hệ thống',
            },
            {
                icon: 'aa',
                title: 'Quản trị hệ thống',
                children: [
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý người sử dụng'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý nhóm người sử dụng'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phân nhóm NSD'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phân quyền chức năng'
                    },
                    {
                        icon: <BiCog className='dd-items' />,
                        title: 'Quản lý phê duyệt người sử dụng'
                    },
                ]
            },
            {
                icon: 'aa',
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
        icon: 'any',
        title: 'Danh mục',
        children: [
            {
                icon: 'any',
                title: 'Danh mục Mã chương'
            },
            {
                icon: 'any',
                title: 'Danh mục Mã nội dung kinh tế'
            },
            {
                icon: 'any',
                title: 'Danh mục Cơ quan thu'
            },
            {
                icon: 'any',
                title: 'Danh mục Cơ quan kho bạc'
            },
        ]
    },
    {
        icon: 'any',
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
                        url: '/xuLyChungTuThueHQ'
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
        icon: 'any',
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
        icon: 'any',
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
        icon: 'any',
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
        icon: 'any',
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