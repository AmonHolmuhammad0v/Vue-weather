import React from 'react'
import s from './current.module.scss'
import { icons, images } from '../../assets/image'
import { useSelector } from 'react-redux'
import getWind from '../../utils/getWind'
import getTime from '../../utils/getTime'
const Current = () => {
  const {current, name} = useSelector((state)=>state.weather.weather);
  const icon = parseInt(current.weather[0].icon)
  const iconImg = icons[icon]
  // console.log(icon);
  return (
    <div className={s.current}>
      <div className={s.current__info}>
        <p className={s.current__temp}>{ Math.round(current.temp)}°</p>
        <p className={s.current__day}>Сегодня</p>
        <p className={s.current__time}>Время: {getTime(current.dt, 'hours')}:{getTime(current.dt)}</p>
        <p className={s.current__city}>Город: {name}</p>
        <img src={iconImg} alt="" className={s.current__icon} />
      </div>
      <div className={s.current__details}>
        <div className={s.current__card}>
          <div className={s.current__dIcon}>
            <img src={images.temp} alt="" />
          </div>
          <p className={s.current__dText}>Температура</p>
          <p className={s.desc}>{ Math.round(current.temp)}° - ощущается как { Math.round(current.feels_like)}°</p>
        </div>
        <div className={s.current__card}>
          <div className={s.current__dIcon}>
            <img src={images.pressure} alt="" />
          </div>
          <p className={s.current__dText}>Давление</p>
          <p className={s.desc}>{current.pressure} мм ртутного столба</p>
        </div>
        <div className={s.current__card}>
          <div className={s.current__dIcon}>
            <img src={images.precipitation} alt="" />
          </div>
          <p className={s.current__dText}>Осадки</p>
          <p className={s.desc}>
            {
            current.rain ? `дождь - ${current.rain?.['1h']} мм/ч` : 
            current.snow ? `снег - ${current.snow?.['1h']} мм/ч` : 
            'Без осадков'
            }
          </p>
        </div>
        <div className={s.current__card}>
          <div className={s.current__dIcon}>
            <img src={images.wind} alt="" />
          </div>
          <p className={s.current__dText}>Ветер</p>
          <p className={s.desc}>{current.wind_speed} м/с {getWind(current.wind_deg)} - ветер</p>
        </div>
      </div>
    </div>
  )
}

export default Current