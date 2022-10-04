import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className='text-center text-4xl mb-3'>Here are all Users</h2>
            <hr />
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;