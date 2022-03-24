import React from "react";
import "./SearchPokemon.css";

function SearchPokemon(){
    const [search, setSearch] = React.useState("");

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    }
        return (
        <>
            <input className="search-pokemon" value={search} onChange={onSearchChange} type="text" placeholder="Search Pokemon" />
            <p>{search}</p>
        </>
    )
}

export default SearchPokemon;