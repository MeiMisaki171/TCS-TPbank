import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import LapChungTuThueHQ from "./pages/LapChungTuThueHQ";
import Login from "./pages/Account/Login";

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
    {
        path: "/lapChungTuThueHQ",
        element: <LapChungTuThueHQ />,
        errorElement: <NotFoundPage />
    },
])

export default router