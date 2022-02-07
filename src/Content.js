import React from 'react';

export default function content(props) {

  function temp(k){
    if(k)
      return <div>{Math.round((k-273.15)*100)/100}&deg;</div>    
  }


    return <div className='content card'>
    <h2 className='cityName display-3'>{props.data.name}</h2>
    <h3 className='display-5'>{props.data.country}</h3>
    <div className='feels_like'>
      <h1 className='display-3'>{temp(props.data.temp)}</h1>
      {props.data.feels_like?<h5>Feels like {temp(props.data.feels_like)}</h5>:''}
    </div>
    <div className='float-container'>
    <div className='float-child cool'> 
      {props.data.min_temp?<div><h4>Minimum</h4><h2>{temp(props.data.min_temp)}</h2></div>:''}
    </div>
    <div className='float-child hot'> 
      {props.data.max_temp?<div><h4>Maximum</h4><h2>{temp(props.data.max_temp)}</h2></div>:''}
    </div>
    </div>
  </div>;

}
