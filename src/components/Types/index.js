import React from "react";
import "./Types.css";

function Types(props){
    props.selected.types.map(type => {
        props.colores.map(color => {
            if(type.type.name === color.type.toLowerCase()){
                type.type.color = color.color
            }
            return color
        })
    })

    return (
        <div className="types" >
            {Array.isArray(props.selected.types) && props.selected.types.map(type =>       
                <span className="type" key={type.type.name} style={{ backgroundColor: `${type.type.color}` }}>
                    {type.type.name}
                </span>
            )}
        </div>
    )
}

export default Types;