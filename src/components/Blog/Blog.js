import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { title, id } = blog;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${id}`);
    }
    return (
        <div className='border-2 rounded-lg border-neutral-500 relative h-48 p-5'>
            <h2 className='mb-3'>{title}</h2>
            <button onClick={handleClick} className='bg-teal-600 text-white rounded-sm absolute bottom-3 px-2 py-1 hover:bg-teal-700'>Get Details</button>
        </div>
    );
};

export default Blog;