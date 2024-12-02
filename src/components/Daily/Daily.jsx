import React, { useState } from 'react'
import s from './daily.module.scss'
import DailyItem from './DailyItem'
import { useSelector } from 'react-redux';


const Daily = () => {
    const {daily} = useSelector((state)=>state.weather.weather);
    // console.log(daily);
    const [show, setShow] = useState(true);

  return (
    <div className={s.daily}>
        <div className={s.daily__nav}>
            <button className={`${s.daily__btn} ${show ? s.active : '' }`}
            onClick={()=>{setShow(true)}}>На неделю</button>
            <button className={`${s.daily__btn} ${!show ? s.active : '' }`}
            onClick={()=>{setShow(false)}}>Отменить</button>
        </div>
        <div className={`${s.daily__list} ${!show ? s.active : '' }`}>
            {
                daily.map((elem, index)=>(
                    <DailyItem key={elem.dt} day={elem} index={index}/>
                )).slice(0, 7)
            }
        </div>
    </div>
  )
}

export default Daily