import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { title, id } = blog;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${id}`);
    }
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleClick}>Get Details</button>
        </div>
    );
};

export default Blog;