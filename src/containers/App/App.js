import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import CardItem from '../../components/CardItem';
import CardList from '../CardList';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPokemon/>
      <main>
        <CardList>
          {/* <CardItem/> */}
        </CardList>
      </main>
    </div>
  );
}

export default App;
