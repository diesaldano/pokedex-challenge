import React from 'react';
import './CardDescription.css';
import { PokemonContext } from '../../Context/index';
import { BsClipboardPlus } from 'react-icons/bs';
import  {BiRuler } from 'react-icons/bi';

function CardDescription(props){ 
    console.log('card descriptions', props)

    return(
        <div className="card-description">
            <div className="card-content">
                {/* <img className='photo-detail' src={props.pokemon.sprites.other.home.front_default} alt="pokemon"/> */}
                <div className="types" >
                    {Array.isArray(props.pokemon.types) && props.pokemon.types.map(type => 
                        <span className='type' style={{ backgroundColor: props.pokemon.color }} 
                            key={type.type.name}>{type.type.name}
                        </span>
                    )}
                </div>
                <span className='about' style={{ color: props.pokemon.color }}>About</span>
                <div>
                    <div className='graphic-information'>
                        <div className='box-info'>
                            <span className='power-description'>
                                <BsClipboardPlus/> {props.pokemon.weight} kg
                            </span>
                            <span className='box-title'>Weight</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            <span className='power-description'><BiRuler/> {props.pokemon.height} m</span>
                            <span className='box-title'>Heigth</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            {/* {props.pokemon.moves.map(move => 
                                <span className='power-description' key={move.move.name}>{move.move.name}</span> 
                            )} */}
                            <span className='box-title'>Moves</span>
                        </div>
                    </div>
                    <p className='pragraph-info'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    <h5 className='base-stats' style={{ color: props.pokemon.color }}>Base stats</h5>
                </div>
            </div>
        </div>
    )
}

export default CardDescription; 