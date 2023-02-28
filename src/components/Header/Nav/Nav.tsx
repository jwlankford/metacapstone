import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="/about">About</a></li> 
                <li className="menu-item"><a href="/contact">Contact</a></li> 
            </ul>
        </nav>
    );
}

export default Nav;