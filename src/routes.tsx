import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import LapChungTuThueHQ from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuThueHQ/lapChungTuThueHaiQuan";
import Login from "./pages/Account/Login";
import MaChuong from "./pages/DanhMuc/MaChuong/maChuong";
import MaNdkt from "./pages/DanhMuc/MaNdkt/maNDKT";
import CoQuanThu from "./pages/DanhMuc/CoQuanThu/coQuanThu";
import CoQuanKhoBac from "./pages/DanhMuc/CoQuanKhoBac/coQuanKhoBac";
import DiaBanHanhChinh from "./pages/DanhMuc/DiaBanHanhChinh/diaBanHanhChinh";
import LapChungTuThueND from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuThueND/lapChungTuThueND";
import LapChungTuThueCN from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuThueCN/lapChungTuThueCN";
import LapChungTuPhiHT from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuPhiHT/lapChungTuPhiHT";
import LapBienLaiThu from "./pages/XuLyChungTuThue/LapChungTu/LapBienLaiThu/lapBienLaiThu";
import LapCtuLNH from "./pages/XuLyChungTuThue/LapChungTu/LapChungTuLNH/lapCtuLNH";
// import DiaBanHanhChinh from "./pages/DanhMuc/DiaBanHanhChinh";
// import TaiKhoan from "./pages/DanhMuc/TaiKhoan";
// import MaPhi from "./pages/DanhMuc/MaPhi";
// import LoaiHinhXnk from "./pages/DanhMuc/LoaiHinhXnk";
// import CoQuanThu from "./pages/DanhMuc/CoQuanThu";
// import CreateNew from "./pages/DanhMuc/MaChuong/createNew";

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
    // {
    //     path: "/danhmuc/machuong/create",
    //     element: <CreateNew />,
    //     errorElement: <NotFoundPage />
    // },
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
    // {
    //     path: '/danhmuc/taiKhoan',
    //     element: <TaiKhoan />,
    //     errorElement: <NotFoundPage />
    // },
    // {
    //     path: '/danhmuc/maPhi',
    //     element: <MaPhi />,
    //     errorElement: <NotFoundPage />
    // },
    // {
    //     path: '/danhmuc/loaiHinhXNK',
    //     element: <LoaiHinhXnk />,
    //     errorElement: <NotFoundPage />
    // },

    // Xử lý chứng từ thuế
    {
        path: "/lapChungTuThueHQ",
        element: <LapChungTuThueHQ />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/lapChungTuThueND",
        element: <LapChungTuThueND />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/lapChungTuThueCN",
        element: <LapChungTuThueCN />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/lapChungTuPhiHT",
        element: <LapChungTuPhiHT />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/lapBienLaiThu",
        element: <LapBienLaiThu />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/lapCtuLNH",
        element: <LapCtuLNH />,
        errorElement: <NotFoundPage />
    },
])

export default router