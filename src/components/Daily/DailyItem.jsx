import React from 'react'
import s from './daily.module.scss'
import {icons} from '../../assets/image'
import getTime from '../../utils/getTime'

const DailyItem = ({day, index}) => {
    const icon = parseInt(day.weather[0].icon)
    const iconImg = icons[icon]
    // console.log(day, index);
  return (
    <div className={s.daily__item}>
        <h3 className={s.daily__title}>{
            index == 0 ? 'Сегодня': 
            index == 1 ? 'Завтра': 
            getTime(day.dt, 'week')
        
        }</h3>
        <p className={s.daily__date}>{getTime(day.dt, 'day')} {getTime(day.dt, 'month')}</p>
        <img src={iconImg} alt="" className={s.daily__img} />
        <p className={s.daily__temp}>{Math.round(day.temp.day)}°</p>
        <p className={s.daily__night}>{Math.round(day.temp.night)}°</p>
        <p className={s.daily__desc}>{day.weather[0].description}</p>
    </div>
  )
}

export default DailyItem