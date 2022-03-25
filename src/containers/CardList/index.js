import React from "react";
import "./CardList.css";
import CardItem from '../../components/CardItem'

function CardList(props){
	const [pokemonList, setpokemonList] = React.useState([])
	const colores = [
		{type: 'rock', color: '#B69E31'},
		{type: 'Ghost', color: '#70559B'},
		{type: 'Steel', color: '#B7B9D0'},
		{type: 'Water', color: '#6493EB'},
		{type: 'Grass', color: '#74CB48'},
		{type: 'Psychic', color: '#FB5584'},
		{type: 'Ice', color: '#B7B9D0'},
		{type: 'Dark', color: '#75574C'},
		{type: 'Fairy', color: '#E69EAC'},
		{type: 'Normal', color: '#AAA67F'},
		{type: 'Fighting', color: '#C12239'},
		{type: 'Flying', color: '#A891EC'},
		{type: 'Poison', color: '#A43E9E'},
		{type: 'Ground', color: '#DEC16B'},
		{type: 'Bug', color: '#A7B723'},
		{type: 'Fire', color: '#F57D31'},
		{type: 'Electric', color: '#F9CF30'},
		{type: 'Dragon', color: '#7037FF'},

	]

	React.useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
			const data = await res.json()
			let results = data.results;
			let promisesArray = results.map(async (item) => {
				const res = await fetch(item.url)
				const data = await res.json()
				return data				
			})
			const pppp = await Promise.all(promisesArray)
			let addColor = pppp.map(item => {
				item.types.map(type => {
					colores.find(color => {
						if(type.type.name === color.type.toLocaleLowerCase() 
							&& type.slot === 1){
								item.color = color.color
						}
					})
				})
				return item
			})
			setpokemonList(addColor)
		}
		setTimeout(fetchData(), 5000)
	}, [])

	return (
		<div className="grid-layout">
			<CardItem item={pokemonList} colores={colores}/>
			{props.children}
		</div>
	)
}

export default CardList;