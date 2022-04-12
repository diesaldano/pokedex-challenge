import React from 'react';
import axios from 'axios';

function useServiceList(initialValue, currentPage, limit, selectLenguage) {
    const [item, setItem] = React.useState(initialValue)	
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
		try {
			const fetchData = async () => {
				const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${currentPage}`)
				let promisesArray = res.data.results.map(async (item) => {
					const res = await axios.get(item.url)
					return res.data				
				})
				const pokeData = await Promise.all(promisesArray)
				const promisesArrayLenguage = pokeData.map(async (item) => {
					const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${item.id}/`)
					const lenguage = res.data.flavor_text_entries.find(item => item.language.name === selectLenguage)
					item.description = lenguage.flavor_text
					const name = res.data.names.find(item => item.language.name === selectLenguage)
					item.name = name.name
					return item
				})
				const pokeDataLenguage = await Promise.all(promisesArrayLenguage)
				let addColor = pokeDataLenguage.map(item => {
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
				setItem(addColor)
			}
			setTimeout(fetchData(), 1000)
		} catch (error) {
			console.log(error)
		}
			
	}, [currentPage, selectLenguage])

	return {
		item,
		colores
	}
    
}

export { useServiceList };