import React, { useEffect, useState } from 'react'
import { images } from '../../assets/image'
import style from './navbar.module.scss'
import { useDispatch } from 'react-redux'
import { getLatLon } from '../../store/features/weather'

const Navbar = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()
    
    const setWeather = (event)=>{
        // console.log(event);
        if (event.key == 'Enter') {
            dispatch(getLatLon(city))
        }
    }
  return (
    <nav className={style.nav}>
        <a href="" className={style.nav__logo}>
            <img src={images.logo} alt="" />
            vue weather
        </a>
        <div className={style.nav__search}>
            <img src={images.city} alt="" />
            <input 
                type="text" 
                className={style.nav__input} 
                placeholder='Выбрать город'  
                onChange={(event)=>{setCity(event.target.value);}}
                onKeyDown={setWeather}
            />
        </div>
    </nav>
  )
}

export default Navbar