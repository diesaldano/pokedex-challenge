import React from 'react'
import './Sort.css'
import { BsSortAlphaDown, BsSortNumericDown } from 'react-icons/bs'
import { PokemonContext } from '../../Context/index'

function Sort(){
    const {
        sort,
        SortedByName
    } = React.useContext(PokemonContext);
    return (
        <div className="sort" >
            {!SortedByName ? 
                <div className="sort-title" onClick={() => sort('name')}>
                    <BsSortAlphaDown/>
                </div>  :
                <div className="sort-title" onClick={()=> sort('order')}>
                    <BsSortNumericDown/>
                </div>
            }
        </div>
    )
}

export default Sort; 