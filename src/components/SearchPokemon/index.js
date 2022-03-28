import React from "react";
import "./SearchPokemon.css";
import { PokemonContext } from '../../Context';


function SearchPokemon(){
    const { searchPokemon, setSearchValue } = React.useState(PokemonContext);

    const onSearchChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value);
    }
    return (
        <div>
            <input className="search-pokemon" 
                value={searchPokemon} 
                onChange={onSearchChange} 
                type="text" 
                placeholder="Search Pokemon" 
            />
            <p>{searchPokemon}</p>
        </div>
    )
}

export default SearchPokemon;