import React from 'react';
import './Pagination.css';
import { PokemonContext } from '../../Context';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
        <div className='container-pagination'>
            <button className='button-pagination' type='button' onClick={ onClickPrevious }>
                <BsArrowLeftCircleFill />
            </button>
            <button className='button-pagination' type='button' onClick={ onClickNext }>
                <BsArrowRightCircleFill />
            </button>
        </div>
    )
}

export default Pagination;