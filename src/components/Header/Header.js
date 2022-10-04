import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-teal-600 text-white flex justify-end p-6'>
            <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 p-1' : 'mr-5 p-1'} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 p-1' : 'mr-5 p-1'} to='/users' > Users</NavLink >
            <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 p-1' : 'mr-5 p-1'} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 p-1' : 'mr-5 p-1'} to='/countries'>Country</NavLink>
        </nav>
    );
};

export default Header;