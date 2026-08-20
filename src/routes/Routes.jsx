import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main
    },
]);

export default router