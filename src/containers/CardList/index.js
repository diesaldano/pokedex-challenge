import React from "react";
import "./CardList.css";

function CardList(props){
	return (
		<div className="grid-layout">
			{props.children}
		</div>
	)
}

export default CardList;