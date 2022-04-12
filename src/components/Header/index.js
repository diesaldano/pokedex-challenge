import  React from 'react';
import logo from '../../assets/logo/Pokeball.png';
import './header.css';
import Sort from '../Sort';
import TranslateButton from '../TranslateButton';

function HeaderUI() {
  return (
    <header className="header">
      <div className="header-brand">
        <img className='logo' src={logo} alt="Pokemon logo" />
        Pokédex
      </div>
      <div className='buttons-header'>
        <TranslateButton />
        <Sort />
      </div>
    </header>
  );
}

export default HeaderUI;