import React from "react";
import "./Types.css";
import { PokemonContext } from "../../Context/index";

function Types(props){
    const {
        selected,
        colores
    } = React.useContext(PokemonContext);

    return (
        <div className="types" >
            {Array.isArray(selected.types) && selected.types.map(type =>       
                <span className="type" key={type.type.name} style={{ backgroundColor: `${props.color}` }}>
                    {type.type.name}
                </span>
            )}
        </div>
    )
}

export default Types;