import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import UserDetails from "../components/UserDetails/UserDetails";
import Users from "../components/Users/Users";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/users',
                loader: async () => {
                    return fetch('https://jsonplaceholder.typicode.com/users');
                },
                element: <Users></Users>
            },
            {
                path: '/user/:id',
                loader: async ({ params }) => {
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
                },
                element: <UserDetails></UserDetails>
            },
            {
                path: '/blogs',
                loader: async () => {
                    return fetch('https://jsonplaceholder.typicode.com/posts');
                },
                element: <Blogs></Blogs>
            },
            {
                path: '/blog/:id',
                loader: async ({ params }) => {
                    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                },
                element: <BlogDetails></BlogDetails>
            }
        ]
    },
    { path: '*', element: <div>error 404!! Found</div> }
]);

export default router;