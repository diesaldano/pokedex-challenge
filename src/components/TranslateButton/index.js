import React from 'react';
import { BsTranslate } from "react-icons/bs";
import { PokemonContext } from '../../Context/index'
import './TranslateButton.css'
import axios from 'axios';


function TranslateButton(){
    const {
        selectLenguage,
        onTranslate,
    } = React.useContext(PokemonContext);
    
    const [options, setOptions] = React.useState([])	

    React.useEffect(() => {
		try {
			const fetchTranslate = async () => {
				const res = await axios.get('https://pokeapi.co/api/v2/language/')
                setOptions(res.data.results)
			}
			setTimeout(fetchTranslate(), 1000)
		} catch (error) {
			console.log(error)
		}
			
	}, [])

    const handleTranslate = (e) => {
        onTranslate(e.target.value);
    }

    return (
        <div className="translate-button">
            {/* <button type='button' className='' onClick={handleTranslate}>
                <BsTranslate />
            </button> */}
            <select className='type-select' type="select" value={selectLenguage} onChange={handleTranslate}>
                {options.map(item => {
                    return (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default TranslateButton;