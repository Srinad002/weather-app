import React, { useState } from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Searchbar from './Searchbar'
import Content from './Content';
import api from './api';


export default function App() {
    const state = {
        name:'',
        country:'',
        temp:'',
        feels_like:'',
        min_temp:'',
        max_temp:''
    }
    const [city, setCity]= useState('');
    const [data, setData]= useState({...state});

    const searchCity= async ()=>{
        const url = `weather?q=${city}&appid=80aafbeae496c7845569dac2c853060f`
        const response = await api.get(url)
        const responseData = response.data
        console.log(responseData)
        setData({
            name: responseData.name,
            country: responseData.sys.country,
            temp: responseData.main.temp,
            feels_like: responseData.main.feels_like,
            min_temp:responseData.main.temp_min,
            max_temp: responseData.main.temp_max,
        })
    }

    const changeHandler=(city)=>{
        setCity(city); 
    }

  return <div className='container'>
      <Searchbar searchCity={searchCity} changeHandler={changeHandler} city={city}/>
      <Content data={data}/>
  </div>;
}
