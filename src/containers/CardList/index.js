import React from "react";
import "./CardList.css";
import Header from '../../components/Header';
import SearchPokemon from '../../components/SearchPokemon';
import CardItem from '../../components/CardItem';


function CardList(props){
	return (
		<div style={{ padding: '10px' }}>
        <Header />
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