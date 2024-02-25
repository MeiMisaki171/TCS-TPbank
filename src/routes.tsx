import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import XuLyChungTu from "./pages/XuLyChungTu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/xuLyChungTuThueHQ",
        element: <XuLyChungTu />,
        errorElement: <NotFoundPage />
    },
])

export default router