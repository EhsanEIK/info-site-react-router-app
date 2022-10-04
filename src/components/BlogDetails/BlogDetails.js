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
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleClick}>Get Author</button>
        </div>
    );
};

export default BlogDetails;