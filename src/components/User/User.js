import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, username, id } = user;
    return (
        <div>
            <h2>{name}</h2>
            <Link to={`/user/${id}`}>{username}</Link>
        </div>
    );
};

export default User;