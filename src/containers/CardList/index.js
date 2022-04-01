import React from "react";
import "./CardList.css";
import Header from '../../components/Header';
import SearchPokemon from '../../components/SearchPokemon';
import CardItem from '../../components/CardItem';
import Pagination from "../../components/Pagination";

function CardList(){

	return (
		<div style={{ padding: '0px 10px' }}>
			<Header />
			<SearchPokemon />
			<Pagination/>
			<main>
				<div className="grid-layout">
					<CardItem/>
				</div>
			</main>
      </div> 
	)
}

export default CardList;