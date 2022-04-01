import React from 'react';
import './Pagination.css';
import { PokemonContext } from '../../Context';
function Pagination(){
    const { 
        onPrevious,
        onNext,
    } = React.useContext(PokemonContext);

    const onClickPrevious = () => {
        onPrevious()
    }

    const onClickNext = () => {
        onNext()
    }

    return(
        <div>
            <button type='button' onClick={ onClickPrevious }>
                Previous
            </button>
            <button type='button' onClick={ onClickNext }>
                Next
            </button>
        </div>
    )
}

export default Pagination;