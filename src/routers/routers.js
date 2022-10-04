import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Users from "../components/Users/Users";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/users', element: <Users></Users> },
            { path: '/blogs', element: <Blogs></Blogs> },
        ]
    },
    { path: '*', element: <div>error 404!! Found</div> }
]);

export default router;