import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componants/Blog/Blog";
import Home from "../Componants/Home/Home";
import Main from "../Layout/Main";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])