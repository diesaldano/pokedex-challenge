import React from "react";
import './baseStats.css';

function BaseStats(props){

    return(
        <div className="base-stats" style={{ color: props.color }}>
            {
                props.stats.map(stat => 
                    <div className="stats-grid" key={stat.stat.name}>
                        <span className="stats-title">{stat.stat.name.slice(0, 3)}</span>
                        {/* <span className='separator'></span> */}
                        <span className="stats-number">{stat.base_stat}</span>
                        <span className="stats-graphic" >
                            <span className="stats-mark" 
                                style={{ backgroundColor: `${props.color}`, width: `${stat.base_stat}%`}}/>
                            <span className="background-stats" 
                                style={{ backgroundColor: `${props.color}`, opacity: '0.4' }}   /> 
                        </span>
                    </div>
                )
            }

        </div>
    )
}

export default BaseStats;