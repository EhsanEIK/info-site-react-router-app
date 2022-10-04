import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Welcome to the users page</h2>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;