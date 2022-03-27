import React, {useState} from "react";
import { useServiceList } from "../Services/useServiceList";

const PokemonContext = React.createContext();

function PokemonProvider(props) {
    const [searchValue, setSearchValue] = useState('');
    const {
        item
    } = useServiceList([])

    let searchedPokemon = [];
    if(searchValue){
        searchedPokemon = item
    } else {
        searchedPokemon = item.filter(item => {
            let pokeName = item.name.toLocaleLowerCase()
            const searchText = searchValue.toLowerCase();
            return pokeName.includes(searchText);
        })
    }

    return (
        <PokemonContext.Provider value={{ 
            searchedPokemon,
            searchValue,
            setSearchValue
        }}>
            {props.children}
        </PokemonContext.Provider> 
  ) 
}

export {PokemonContext, PokemonProvider};