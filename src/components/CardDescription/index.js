import React from 'react';
import './CardDescription.css';
import { PokemonContext } from '../../Context/index';
import {BsClipboardPlus, BsRulers} from 'react-icons/bs';

function CardDescription(){
    return(
        <div className="card-description">
            <div className="card-description-content-title">
                <span>fire</span>
                <span className='about'>About</span>
                <div>
                    <div className='graphic-information'>
                        <div className='box-info'>
                            <span className='power-description'><BsClipboardPlus/> 8,5 kg</span>
                            <span className='box-title'>Weight</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            <span className='power-description'><BsRulers/> 0,6 m</span>
                            <span className='box-title'>Heigth</span>
                        </div>
                        <span className='separator'></span>
                        <div className='box-info'>
                            <span className='power-description'>
                                Mega-Punch <br/>
                                Fire-Punch <br/>
                            </span>
                            <span className='box-title'>Moves</span>
                        </div>
                    </div>
                    <p className='pragraph-info'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
                    <h5 style={{ color: '#F57D31' }}>Base stats</h5>
                    <div>
                        Grafica
                    </div>  

                </div>
            </div>
        </div>
    )
}

export default CardDescription; 