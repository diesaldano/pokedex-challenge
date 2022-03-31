import React from "react";
import './baseStats.css';

function BaseStats(props){

    return(
        <div className="base-stats" style={{ color: props.color }}>
            Base stats
                {
                    props.stats.map(stat => 
                    <div className="stats-grid" key={stat.stat.name}>
                        <span className="stats-title">{stat.stat.name}</span>
                        <span className="stats-number">{stat.base_stat}</span>
                        <span className="stats-graphic" style={{ backgroundColor: `${props.color}` }}>
                            <span className="stats-graphic-bar"></span>
                        </span>
                    </div>
                    )
                }

        </div>
    )
}

export default BaseStats;