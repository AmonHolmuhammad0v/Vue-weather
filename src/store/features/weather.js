import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getLatLon = createAsyncThunk('weather/getLatLon', async (city, reduxObj)=>{
  const {key} = reduxObj.getState().weather;
  // console.log(reduxObj);
  const result = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`);
  const cityInfo = result.data[0]
  reduxObj.dispatch(getWeather(cityInfo));
})

export const getWeather = createAsyncThunk('weather/getWeather', async (info, reduxObj)=>{
  const {key} = reduxObj.getState().weather;
  const {lat, lon, local_names } = info;
  // console.log(lat, lon, local_names);
  const result = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=ru`);
  const weatherInfo = {...result.data, name: local_names.ru}
  return weatherInfo
  // console.log(weatherInfo);
})


const initialState = {
  weather: null,
  key: '7d6a4baf5de7814f7af5d578ef57bad2'
}

export const userSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {  },
  extraReducers: (builder)=>{ 
    builder.addCase(getWeather.fulfilled, (state, action)=>{
      state.weather = action.payload
    })
  }
})

export const { } = userSlice.actions

export default userSlice.reducer
