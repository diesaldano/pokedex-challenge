import React from 'react'
import Header from '../../components/Header/Header';
import SearchPokemon from '../../components/SearchPokemon/SearchPokemon';
import CardList from '../CardList';
import Details from '../Details'
import CardItem from '../../components/CardItem';

function AppUI(){
  let isLoading = false;
  let isError = false;

  return(
    <div className="App">
      { isLoading ? 
      <div>
        <Header />
        <SearchPokemon />
        <main>
          <CardList>
            <CardItem />
          </CardList>
        </main>
      </div> 
      : 
          <Details/>
        }
        { isError ? <div>Error</div> : null }
    </div>
  )
}

export default AppUI