import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <a href="google.com">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="header-list">
                <li>
                    <a href="google.com">Characters</a>
                </li>
                <li>
                    <a href="google.com">Houses</a>
                </li>
                <li>
                    <a href="google.com">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;