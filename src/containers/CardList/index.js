import React from "react";
import "./CardList.css";
import Header from '../../components/Header';
import SearchPokemon from '../../components/SearchPokemon';
import CardItem from '../../components/CardItem';
import Pagination from "../../components/Pagination";
import Modal from '../../components/Modal';
import {PokemonContext} from '../../Context';
import Details from '../Details'


function CardList(){
	const {
		openModal
	} = React.useContext(PokemonContext);

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
			{  
				!!openModal && (
					<Modal >
						<Details />
					</Modal>
				)
			}
      </div> 
	)
}

export default CardList;