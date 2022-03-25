import React from 'react'
import './CardItem.css'

function CardList(props) {
	return (
		<>
			{props.item.length === 0 && <div>Loading...</div>}
			{
				props.item.map(pokemon => (
					<div className="card-item-content" key={pokemon.name}>
						<div className="card-item-content-image">
							<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						</div>
						<div className="card-item-content-title">
							<p className='name'>{pokemon.name}</p>
						</div>
					</div>
				))
			}
		</>
  )
}

export default CardList;