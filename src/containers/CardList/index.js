import React from "react";
import "./CardList.css";
import HeaderUI from '../../components/HeaderUI';
import SearchPokemon from '../../components/SearchPokemon';
import CardItem from '../../components/CardItem';

function CardList(){

	return (
		<div style={{ padding: '10px' }}>
			<HeaderUI />
			<SearchPokemon />
			<main>
				<div className="grid-layout">
					<CardItem/>
				</div>
			</main>
      </div> 
	)
}

export default CardList;