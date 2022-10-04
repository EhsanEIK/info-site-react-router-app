import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <NavLink className={({ isActive }) => isActive ? 'blue' : undefined} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'blue' : undefined} to='/users'>Users</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'blue' : undefined} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'blue' : undefined} to='/countries'>Country</NavLink>
        </nav >
    );
};

export default Header;