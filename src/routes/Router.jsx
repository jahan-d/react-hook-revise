import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AddPage from "../page/AddPage";
import ShowPage from "../page/ShowPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "addItemPage",
            element: <AddPage/>
        },
        {
            path: "showItemPage",
            element: <ShowPage/>
        }
    ]
  },
]);