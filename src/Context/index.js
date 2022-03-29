import React from "react";
import { useServiceList } from "../Services/useServiceList";

const PokemonContext = React.createContext();

function PokemonProvider(props) {
    const { 
        item,
        colores
    } = useServiceList([])


    const [searchValue, setSearchValue] = React.useState('');
    const [selected, setSelectedPokemon] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    let searchedPokemon = [];
    searchedPokemon = item.filter(item => {
        let pokeName = item.name.toLocaleLowerCase()
        const searchText = searchValue.toLowerCase();
        
        return pokeName.includes(searchText);
    });
    
    return (
        <PokemonContext.Provider value={{ 
            searchedPokemon,
            searchValue,
            setSearchValue,
            selected,
            setSelectedPokemon,
            loading,
            setLoading,
            colores
        }}>
            {props.children}
        </PokemonContext.Provider> 
  ) 
}

export {PokemonContext, PokemonProvider};