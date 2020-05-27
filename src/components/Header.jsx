import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className='header'>
        <div className="header__logo">
            <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" alt=""/>
        </div>
        <div className="header__menu">
            <nav className="nav">
                <ul className="nav__container-list">
                    <li className="nav__item">lorem</li>
                    <li className="nav__item">lorem</li>
                    <li className="nav__item">lorem</li>
                    <li className="nav__item">lorem</li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;