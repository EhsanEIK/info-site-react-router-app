import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-teal-600 text-white md:flex justify-between items-center p-6'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white-500 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div>
                <h2 className='text-4xl font-bold text-amber-400'>INFO-SITE</h2>
            </div>
            <div className={`md:block text-center md:mt-0 mt-5 ${open ? 'block' : 'hidden'}`}>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 md:mr-5 mr-2 py-1 md:px-2 px-1' : 'md:mr-5 mr-2 py-1 md:px-2 px-1'} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 md:mr-5 mr-2 py-1 md:px-2 px-1' : 'md:mr-5 mr-2 py-1 md:px-2 px-1'} to='/users' > Users</NavLink >
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 md:mr-5 mr-2 py-1 md:px-2 px-1' : 'md:mr-5 mr-2 py-1 md:px-2 px-1'} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 md:mr-5 mr-2 py-1 md:px-2 px-1' : 'md:mr-5 mr-2 py-1 md:px-2 px-1'} to='/food'>Food</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-blue-700 md:mr-5 mr-2 py-1 md:px-2 px-1' : 'md:mr-5 mr-2 py-1 md:px-2 px-1'} to='/countries'>Country</NavLink>
            </div>
        </nav>
    );
};

export default Header;