import  React from 'react';
import logo from '../../assets/logo/Pokeball.png';
import './header.css';

function Header() {
  return (
    <header className="header">
        <img className='logo' src={logo} alt="Pokemon logo" />
        Pokédex
    </header>
  );
}

export default Header;