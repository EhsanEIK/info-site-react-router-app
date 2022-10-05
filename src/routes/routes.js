import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Blogs from "../components/Blogs/Blogs";
import Countries from "../components/Countries/Countries";
import Error from "../components/Error/Error";
import Food from "../components/Food/Food";
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
            },
            { path: '/food', element: <Food></Food> },
            {
                path: '/countries',
                loader: async () => {
                    return fetch('https://restcountries.com/v3.1/all');
                },
                element: <Countries></Countries>
            },
            { path: '*', element: <Error></Error> }
        ]
    },
]);

export default router;