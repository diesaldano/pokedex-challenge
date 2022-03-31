import  React from 'react';
import logo from '../../assets/logo/Pokeball.png';
import './header.css';
import Sort from '../Sort';

function HeaderUI() {
  return (
    <header className="header">
      <div className="header-brand">
        <img className='logo' src={logo} alt="Pokemon logo" />
        Pokédex
      </div>
        <Sort />
    </header>
  );
}

export default HeaderUI;