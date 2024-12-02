import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Current from './components/Current/Current'
import { useDispatch, useSelector } from 'react-redux'
import { getLatLon } from './store/features/weather'
import Daily from './components/Daily/Daily'

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getLatLon('Ташкент'))
    }, [])
    const weather = useSelector((state)=>state.weather.weather);
    // console.log(weather);
  return weather && (
    <div className="container">
        <Navbar/>
        <Current/>
        <Daily/>
    </div>
  )
}

export default App