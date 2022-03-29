import React from "react";
import "./SearchPokemon.css";
import { PokemonContext } from '../../Context';

function SearchPokemon(){
    const { searchValue, setSearchValue } = React.useContext(PokemonContext);

    const onSearchChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <input className="search-pokemon" 
            value={searchValue} 
            onChange={onSearchChange} 
            type="text" 
            placeholder="Search Pokemon" 
        />
    )
}

export default SearchPokemon;