import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPokemon/>
      <main>
        render list
      </main>
    </div>
  );
}

export default App;
