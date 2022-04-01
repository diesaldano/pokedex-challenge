import React from "react";
import "./Details.css";
import CardDescription from '../../components/CardDescription';
import { BsArrowLeft } from "react-icons/bs";
import { PokemonContext } from '../../Context/index';
import { useNavigate } from "react-router-dom";


function Details() {
    const {
		searchedPokemon,
        selected,
        loading,
	} = React.useContext(PokemonContext);

	let navigate = useNavigate();

    React.useEffect(() => { 
        if(searchedPokemon.length === 0 && !loading){
            const location = {
                pathname: `/`,
            }
            navigate(location);
        }
    }, [searchedPokemon, loading])

    const handleHistory = () => {
        window.history.back();
    }

    let name = selected.name.charAt(0).toUpperCase() + selected.name.slice(1);

    return(
        <div className="details-container" style={{ backgroundColor: selected.color }}>
            <div className="first">
                <div className="header-details">
                    <div className="brand"> 
                        <span className="icon" onClick={handleHistory}>
                            <BsArrowLeft/>
                        </span>
                        <h5 className="tittle"> {name}</h5>
                    </div>
                    <span className="number">#00{selected.id}</span> 
                </div>
            </div>
            <div className="second">
                <CardDescription pokemon={selected}/>
            </div>
        </div>
    )
}

export default Details;