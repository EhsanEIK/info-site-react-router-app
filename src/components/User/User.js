import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, username, id } = user;
    return (
        <div className='border-2 rounded-lg border-neutral-500 p-5'>
            <h2 className='mb-3'>{name}</h2>
            <Link to={`/user/${id}`} className='bg-teal-600 text-white rounded-sm px-2 py-1 hover:bg-teal-700'>{username}</Link>
        </div>
    );
};

export default User;