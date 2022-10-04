import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { title, id } = blog;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${id}`);
    }
    return (
        <div className='border-2 rounded-lg border-neutral-500 relative h-48'>
            <h2 className='mb-3 p-5'>{title}</h2>
            <div className='flex justify-center'>
                <button onClick={handleClick} className='bg-teal-600 text-white rounded-sm md:w-3/6 absolute bottom-3 px-2 py-1 hover:bg-teal-700'>Get Details</button>
            </div>
        </div>
    );
};

export default Blog;