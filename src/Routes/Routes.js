import { createBrowserRouter } from "react-router-dom";
import Blog from "../Componants/Blog/Blog";
import Card from "../Componants/Card/Card";
import Categories from "../Componants/Categories/Categories";
import Courses from "../Componants/Courses/Courses";
import DownloadPdf from "../Componants/DownloadPdf/DownloadPdf";
import Home from "../Componants/Home/Home";
import Login from "../Componants/Login/Login";
import Register from "../Componants/Register/Register";
import WebdevDetails from "../Componants/WevdevDetails/WebdevDetails";
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
                path: '/coursesdetail',
                element: <WebdevDetails></WebdevDetails>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/download',
                element: <DownloadPdf></DownloadPdf>

            },
            {
                path: '/catagories/:id',
                element: <Categories></Categories>
            },
            {
                path: '/catagories',
                element: <Card></Card>,
                loader: () => fetch(`http://localhost:5000/course-categories`)
            },
            {
                path: '*',
                element: <div className='position-absolute bottom-50 end-50'>
                    <h1>404</h1>
                    <h2>Oops!!! You're Lost 😥</h2>
                    <p>The Page you are looking for was not found..................</p>
                </div>
            }

        ]
    }
])