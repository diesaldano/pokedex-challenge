import React from "react";
import { useParams } from 'react-router-dom'
import "./Details.css";
import CardDescription from '../../components/CardDescription';
import { BsArrowLeft } from "react-icons/bs";
import { PokemonContext } from '../../Context/index';

function Details() {
    const [pokemon, setPokemon] = React.useState({});
    const { name } = useParams();
    const {
		searchedPokemon,
	} = React.useContext(PokemonContext);

    React.useEffect(() => { 
        const fetchData  = async () => {
            try{
                const selected = searchedPokemon.find(pokemon => pokemon.name === name);
                setPokemon(selected);
            } catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [name])

    return(
        <div className="details-container" style={{ backgroundColor: pokemon.color }}>
            <div className="first">
                <div className="header-details">
                    <div className="brand"> 
                        <span className="icon"><BsArrowLeft/></span>
                        <h5 className="tittle"> {pokemon.name}</h5>
                    </div>
                    <span className="number">#00{pokemon.id}</span> 
                </div>
            </div>
            <div className="second">
                <CardDescription pokemon={pokemon}/>
            </div>
        </div>
    )
}

export default Details;