import React, { useEffect } from "react";
import { useServiceList } from "../Services/useServiceList";

const PokemonContext = React.createContext();

function PokemonProvider(props) {
    const {
        item,
        colores
    } = useServiceList([])

    const [searchValue, setSearchValue] = React.useState('');   
    const [searchedPokemon, setSearchedPokemon] = React.useState([]);
    const [selected, setSelectedPokemon] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [SortedByName, setSortedByName ] = React.useState(false)

    useEffect(()=> {
        const onChargeData = () => {
            setSearchedPokemon([...item])
        }
        onChargeData()
    }, [item])

    const sort = (property) => {
        setLoading(true)
        setSortedByName(SortedByName => !SortedByName)
        let dataSorted = [...searchedPokemon].sort((a, b) => {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        setSearchedPokemon(dataSorted);
        return dataSorted
    }
    
  useEffect(() => {
        setLoading(true);
        let data = item.filter(item => {
            let pokeName = item.name.toLocaleLowerCase()
            const searchText = searchValue.toLowerCase();
            return pokeName.includes(searchText);
        });
        setSearchedPokemon(data);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [searchValue]);

    return (
        <PokemonContext.Provider value={{
            searchedPokemon,
            searchValue,
            setSearchValue,
            selected,
            setSelectedPokemon,
            loading,
            setLoading,
            sort,
            SortedByName,
            colores
        }}>
            {props.children}
        </PokemonContext.Provider>
  )
}

export {PokemonContext, PokemonProvider};