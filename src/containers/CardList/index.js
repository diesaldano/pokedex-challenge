import React from "react";
import "./CardList.css";
import CardItem from '../../components/CardItem'

function CardList(props){
	const [pokemonList, setpokemonList] = React.useState([])

	React.useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5')
			const data = await res.json()
			let results = data.results;
			let promisesArray = results.map(async (item) => {
				const res = await fetch(item.url)
				const data = await res.json()
				return data				
			})
			const pppp = await Promise.all(promisesArray)
			setpokemonList(pppp)
			console.log(pokemonList)
		}
		setTimeout(fetchData(), 5000)
	}, [])
	
		return (
			<div className="grid-layout">
				<CardItem item={pokemonList}/>
				{props.children}
			</div>
		)
}

export default CardList;