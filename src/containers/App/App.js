import React from 'react';
import './App.css';
import AppUI from './AppUI';
import  { PokemonProvider }  from '../../Context/index';

function App() {
  return (
    <PokemonProvider>
      <AppUI />
    </PokemonProvider>
  );
}

export default App;
