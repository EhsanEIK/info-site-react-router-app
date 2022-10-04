import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    const { name, username, email, phone, company, address, website } = userDetails;
    return (
        <div>
            <h2>Here are all details of {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
            <h3>Company: {company.name}</h3>
            <h3>Address: {address.city}</h3>
            <h3>User-Name: {username}</h3>
        </div>
    );
};

export default UserDetails;