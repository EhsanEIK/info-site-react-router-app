import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-teal-600 text-white flex justify-between items-center p-6'>
            <div>
                <h2 className='text-4xl font-bold text-amber-400'>INFO-SITE</h2>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 py-1 px-2' : 'mr-5 py-1 px-2'} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 py-1 px-2' : 'mr-5 py-1 px-2'} to='/users' > Users</NavLink >
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 py-1 px-2' : 'mr-5 py-1 px-2'} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 py-1 px-2' : 'mr-5 py-1 px-2'} to='/food'>Food</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 mr-5 py-1 px-2' : 'mr-5 py-1 px-2'} to='/countries'>Country</NavLink>
            </div>
        </nav>
    );
};

export default Header;