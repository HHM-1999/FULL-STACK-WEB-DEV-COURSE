import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componants/Blog/Blog";
import Categories from "../Componants/Categories/Categories";
import Courses from "../Componants/Courses/Courses";
import Home from "../Componants/Home/Home";
import Login from "../Componants/Login/Login";
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
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses/:id',
                element: <Categories></Categories>
            }

        ]
    }
])