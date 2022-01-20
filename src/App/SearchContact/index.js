import React from 'react';
import { Contexto } from '../Contexto';
import './searchContact.css';

function SearchContact(){
    const { searchValue, setSearchValue} = React.useContext(Contexto);
    const onChangeValue = (event) =>{
        setSearchValue(event.target.value);
    }
    return(
        <div className = 'search-container'>
            <input 
                className = 'search-input' 
                placeholder = 'type to search'
                value = { searchValue }
                onChange = { onChangeValue }>
            </input>
            <span className = 'search-icon'></span>
        </div>
    );
}

export { SearchContact };