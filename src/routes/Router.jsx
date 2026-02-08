import { createBrowserRouter, Link } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AddPage from "../page/AddPage";
import ShowPage from "../page/ShowPage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../page/authPages/Login";
import Register from "../page/authPages/Register";
import ProductManagement from "../page/productManagement/ProductManagement";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "addItemPage",
                element: <AddPage />
            },
            {
                path: "showItemPage",
                // loader: async () => { return fetch("") },
                element: <ShowPage />
            },
            {
                path: "productManagement",
                // loader: async () => { return fetch("") },
                element: <ProductManagement />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />,
            },
            {
                path: '/auth/register',
                element: <Register />,
            }
        ]
    },
    {
        path: '*',
        element: (
            <div className="flex flex-col justify-center items-center h-screen gap-4">
                <div>Page not Found</div>
                <Link to='/'>
                    <button className="btn">Home</button>
                </Link>
            </div>
        ),
    }
]);