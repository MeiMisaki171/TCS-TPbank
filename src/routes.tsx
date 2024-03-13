import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import LapChungTuThueHQ from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuThueHQ";
import Login from "./pages/Account/Login";
import MaChuong from "./pages/DanhMuc/MaChuong";
import MaNdkt from "./pages/DanhMuc/MaNdkt";
import CoQuanKhoBac from "./pages/DanhMuc/CoQuanKhoBac";
import DiaBanHanhChinh from "./pages/DanhMuc/DiaBanHanhChinh";
import TaiKhoan from "./pages/DanhMuc/TaiKhoan";
import MaPhi from "./pages/DanhMuc/MaPhi";
import LoaiHinhXnk from "./pages/DanhMuc/LoaiHinhXnk";
import CoQuanThu from "./pages/DanhMuc/CoQuanThu";
import CreateNew from "./pages/DanhMuc/MaChuong/createNew";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/home",
        element: <Home />,
        errorElement: <NotFoundPage />
    },

    //Danh Muc
    {
        path: "/danhmuc/machuong",
        element: <MaChuong />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/danhmuc/machuong/create",
        element: <CreateNew />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/NDKT',
        element: <MaNdkt />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/CQT',
        element: <CoQuanThu />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/CQKB',
        element: <CoQuanKhoBac />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/DBHC',
        element: <DiaBanHanhChinh />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/taiKhoan',
        element: <TaiKhoan />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/maPhi',
        element: <MaPhi />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/danhmuc/loaiHinhXNK',
        element: <LoaiHinhXnk />,
        errorElement: <NotFoundPage />
    },

    // Xử lý chứng từ thuế
    {
        path: "/lapChungTuThueHQ",
        element: <LapChungTuThueHQ />,
        errorElement: <NotFoundPage />
    },
])

export default router