import React from 'react';

export default function Searchbar(props) {

    const changeHandler=(e)=>{
        e.preventDefault()
        props.changeHandler(e.target.value)
    }

    const searchCity=()=>{
        props.searchCity()
    }

return(
    <div className='searchbar'>
        <fieldset>
        <label htmlFor='input'></label>
        <input 
        name="input" 
        className='input'
        placeholder='City'
        value={props.city}
        onChange={changeHandler}/>
        <button className='btn-custom btn-sm' onClick={searchCity}>Get Weather</button>
        </fieldset>
    </div>
)
}
