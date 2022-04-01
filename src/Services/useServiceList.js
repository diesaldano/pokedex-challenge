import React from 'react';

function useServiceList(initialValue, currentPage, limit) {
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
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${currentPage}`)
				const data = await res.json()
				console.log(data, limit, currentPage)
				let results = data.results;
				let promisesArray = results.map(async (item) => {
					const res = await fetch(item.url)
					const data = await res.json()
					return data				
				})
				const pokeData = await Promise.all(promisesArray)
				let addColor = pokeData.map(item => {
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
			setTimeout( fetchData(), 1000)
		} catch (error) {
			console.log(error)
		}
			
	}, [currentPage])

	return {
		item,
		colores
	}
    
}

export { useServiceList };