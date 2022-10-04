import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const { title, body, userId } = blogDetails;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${userId}`);
    }
    return (
        <div>
            <h2 className='text-center text-4xl mb-5'>Title: <span className='font-semibold text-yellow-600'>{title}</span></h2>
            <div className='text-center text-lg'>
                <p>{body}</p>
                <button onClick={handleClick} className='bg-teal-600 text-white rounded-sm px-2 py-1 mt-5 hover:bg-teal-700'>Get Author</button>
            </div>
        </div>
    );
};

export default BlogDetails;