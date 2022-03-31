import  React from 'react';
import logo from '../../assets/logo/Pokeball.png';
import './header.css';
import Filter from '../Sort';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img className='logo' src={logo} alt="Pokemon logo" />
        Pokédex
      </div>
        <Filter />
    </header>
  );
}

export default Header;