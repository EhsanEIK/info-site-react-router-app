import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Users from "../components/Users/Users";

const router = createBrowserRouter([
    { path: '/', element: <Home></Home> },
    { path: '/home', element: <Home></Home> },
    { path: '/users', element: <Users></Users> },
    { path: '/blogs', element: <Blogs></Blogs> }
]);

export default router;