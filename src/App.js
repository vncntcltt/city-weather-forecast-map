import './App.css'

import React from 'react'

import CityWeatherForecastMain from './components/CityWeatherForecastMain'

const DEFAULT_COUNTRY = 'France'
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  numberOfDays: process.env.REACT_APP_NUMBER_OF_DAYS || 7
}

function App() {
  return (
    <div className="app">
      <CityWeatherForecastMain country={DEFAULT_COUNTRY} config={config} />
    </div>
  )
}

export default App
