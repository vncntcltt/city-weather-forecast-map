import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CityMap from './CityMap'
import CityWeatherForecast from './CityWeatherForecast'
import { getCities } from '../services/cityApi'

export default function CityWeatherForecastMain({ country, config }) {
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    getCities().then((cities) => setCities(cities))
  }, [country])

  const onSelectCity = (city) => {
    setSelectedCity(city)
  }

  return (
    <main className="city-weather-forecast-container">
      <h3>{country} weather map</h3>

      <CityMap cities={cities} onSelectCity={onSelectCity} />

      <div style={{ marginTop: '10px' }}>
        {selectedCity ? <CityWeatherForecast city={selectedCity} config={config} /> : <h4>Select a city on the map</h4>}
      </div>
    </main>
  )
}

CityWeatherForecastMain.propTypes = {
  country: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired
}
