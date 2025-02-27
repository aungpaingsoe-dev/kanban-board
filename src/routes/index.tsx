import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import {
    Home,
    Tasks,
    NotFound
} from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/tasks", element: <Tasks /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
