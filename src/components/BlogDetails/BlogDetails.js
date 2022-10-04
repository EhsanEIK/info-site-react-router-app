import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const { title, body } = blogDetails;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default BlogDetails;