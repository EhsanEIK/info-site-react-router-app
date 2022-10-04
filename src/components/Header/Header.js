import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/countries'>Country</Link>
        </nav>
    );
};

export default Header;