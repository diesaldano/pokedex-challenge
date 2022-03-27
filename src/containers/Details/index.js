import React from "react";
import "./Details.css";
import CardDescription from '../../components/CardDescription';
import { BsArrowLeft } from "react-icons/bs";


function Details(){
    return(
        <div className="details-container" style={{ backgroundColor: '#F57D31' }}>
            <div className="first">
                <div className="header">
                    <div className="brand"> 
                        <span className="icon"><BsArrowLeft/></span>
                        <h5 className="tittle">Charmander</h5>
                    </div>
                    <span className="number">#004</span> 
                </div>
                {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="pokemon"/> */}

            </div>
            <div className="second">
                <CardDescription/>
            </div>
        </div>
    )
}

export default Details;