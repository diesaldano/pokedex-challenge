import React from "react";
import "./Types.css";
import { PokemonContext } from "../../Context/index";

function Types(){
    const {
        selected,
        colores
    } = React.useContext(PokemonContext);

    selected.types.map(type => {
        colores.map(color => {
            if(type.type.name === color.type.toLowerCase()){
                type.type.color = color.color
            }
            return color
        })

    })

    return (
        <div className="types" >
            {Array.isArray(selected.types) && selected.types.map(type =>       
                <span className="type" key={type.type.name} style={{ backgroundColor: `${type.type.color}` }}>
                    {type.type.name}
                </span>
            )}
        </div>
    )
}

export default Types;