import React from 'react';
import './CardDescription.css';
import { PokemonContext } from '../../Context/index';
import { BsClipboardPlus } from 'react-icons/bs';
import  {BiRuler } from 'react-icons/bi';
import BaseStats from '../BaseStats';
import Types from '../Types';

function CardDescription(props){ 
    const {
        selected,
        colores,
    } = React.useContext(PokemonContext);

    console.log(selected)
    return(
        <div className="card-description">
            <div className="card-content">
                <img className='photo-detail' src={selected.sprites.other.home.front_default} alt="pokemon"/>
                <Types selected={selected} colores={colores}/>
                <span className='about' style={{ color: selected.color }}>About</span>
                <div>
                    <div className='graphic-information'>
                        <div className='box-info'>
                            <span className='power-description'>
                                <BsClipboardPlus/> {selected.weight} kg
                            </span>
                            <span className='box-title'>Weight</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            <span className='power-description'><BiRuler/> {selected.height} m</span>
                            <span className='box-title'>Heigth</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            {props.pokemon.moves.slice(0, 2).map(move => 
                                <span className='power-description' key={move.move.name}>{move.move.name}</span> 
                            )}
                            <span className='box-title'>Moves</span>
                        </div>
                    </div>
                    <p className='pragraph-info'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    <span className="title-base-state" style={{ color: props.pokemon.color}} >Base stats</span>        
                    <BaseStats color={props.pokemon.color} stats={props.pokemon.stats}/>
                </div>
            </div>
        </div>
    )
}

export default CardDescription; 