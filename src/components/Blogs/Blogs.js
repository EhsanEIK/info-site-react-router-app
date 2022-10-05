import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div className='mb-24'>
            <h2 className='text-center text-4xl mb-5'>Here are all Blogs</h2>
            <hr />
            <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-10'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div >
    );
};

export default Blogs;