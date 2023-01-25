import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import WeatherForecastChart from './WeatherForecastChart'
import { getWeather } from '../services/weatherApi'

export default function CityWeatherForecast({ city, config }) {
  const [cityWeatherData, setCityWeatherData] = useState(null)

  useEffect(() => {
    getWeather(city?.lat, city?.lng, config.apiKey).then((weatherData) => setCityWeatherData(weatherData))
  }, [city, config])

  const hasDailyData = cityWeatherData && cityWeatherData.daily?.[0]
  return (
    <div>
      {hasDailyData && <WeatherForecastChart areaName={city.city} forecastData={cityWeatherData} config={config} />}
    </div>
  )
}

CityWeatherForecast.propTypes = {
  city: PropTypes.object,
  config: PropTypes.object.isRequired
}
