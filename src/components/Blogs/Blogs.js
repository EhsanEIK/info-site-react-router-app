import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <h2>Welcome to the blogs page</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;