import { createBrowserRouter } from "react-router-dom";

import App from "./App";
// import Cart from "./Cart1";
import Cart from "./Cart";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";
import List from "./List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/cart2",
        element: <Cart2 />
    },
    {
        path: "/list",
        element: <List />
    },
    {
        path: "/cart3",
        element: <Cart3 />
    }
]);

export default router;