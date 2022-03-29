import React from 'react'
import './CardItem.css'
import { PokemonContext } from '../../Context';
import { useNavigate } from "react-router-dom";
import CardLoading from '../CardLoading';

function CardList() {
	const {
		searchedPokemon,
		selected,
		setSelectedPokemon,
	} = React.useContext(PokemonContext);

	let navigate = useNavigate();

	const onClickCard = (pokemon) => {
		const location = {
			pathname: `/pokemon/${pokemon.name}`,
			state: {
				pokemon: pokemon
			}
		}
		setSelectedPokemon(pokemon);
		console.log(selected)
		navigate(location);
	}

	return (
		<>
			{searchedPokemon.length === 0 && Array(5).fill(0).map((item, index) => (
				<CardLoading key={index} />
			))}
			{
				searchedPokemon.map(pokemon => (
					<div className="card-item-content" onClick={ () => onClickCard(pokemon) }
						style={{ borderColor: pokemon.color }}  key={pokemon.name}>
						<div className="card-item-content-image">
							<img src={pokemon.sprites.other.home.front_default	} alt={pokemon.name} />
						</div>
						<div className="card-item-content-title" style={{ backgroundColor: pokemon.color }}>
							<p className='name'>{pokemon.name}</p>
						</div>
					</div>
				))
			}
		</>
  )
}

export default CardList;