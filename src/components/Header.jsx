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
                    <li className="nav__container-list__item"><a className="link" href="/">Services</a></li>
                    <li className="nav__container-list__item"><a className="link" href="/">Works</a></li>
                    <li className="nav__container-list__item"><a className="link" href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;