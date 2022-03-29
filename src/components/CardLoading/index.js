import React from "react";
import "../CardItem/CardItem.css";
import Image from '../../assets/images/skeleton.png'
import './CardLoading.css'

function CardLoading(){
    return (
        <div className="card-item-content loading" 
            style={{ borderColor: '#E0E0E0' }}>
            <div className="card-item-content-image ">
                <img src={ Image } alt={'Loading page'} />
            </div>
            <div className="card-item-content-title card-loading" style={{ backgroundColor: '#E0E0E0' }}>
                <p className='name fillname loading'></p>
            </div>
        </div>
    )
}

export default CardLoading;