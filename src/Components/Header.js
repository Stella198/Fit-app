import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <div className="Header">
            <span className='logo-text'>FIT STUDIO</span> 
            <span className='header-nav'>
                <Link className='header-nav-link' to="/home">HOME</Link>
                <Link className='header-nav-link' to="/subscriptions-list">SUBSCRIPTION LIST</Link>   
            </span>
            
        </div>
    );
}

export default Header;
