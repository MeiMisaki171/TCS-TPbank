import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import LapChungTuThueHQ from "./pages/LapChungTuThueHQ";

export const router = createBrowserRouter([
    {
        path: "/",
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