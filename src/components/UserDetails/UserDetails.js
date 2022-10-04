import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    const { name, username, email, phone, company, address, website } = userDetails;
    return (
        <div>
            <h2 className='text-center text-4xl mb-5'>Here are all details of <span className='font-semibold text-yellow-600'>{name}</span></h2>
            <hr />
            <div className='text-center text-lg mt-5'>
                <h3><span className='font-bold mr-2'>Email:</span> {email}</h3>
                <h3><span className='font-bold mr-2'>Phone:</span> {phone}</h3>
                <h3><span className='font-bold mr-2'>Website:</span> {website}</h3>
                <h3><span className='font-bold mr-2'>Company:</span> {company.name}</h3>
                <h3><span className='font-bold mr-2'>Address:</span> {address.city}</h3>
                <h3><span className='font-bold mr-2'>User-Name:</span> {username}</h3>
            </div>
        </div >
    );
};

export default UserDetails;