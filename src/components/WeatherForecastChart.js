import React from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const DEFAULT_NUMBER_OF_DAYS = 7

const getIconUrl = (icon) => {
  if (icon) {
    return `url(http://openweathermap.org/img/wn/${icon}.png)`
  }
  return null
}

export default function WeatherForecastChart({ areaName, forecastData, config }) {
  const numberOfDays = config.numberOfDays || DEFAULT_NUMBER_OF_DAYS
  const dailyForecast = forecastData.daily.slice(0, numberOfDays)

  const days = dailyForecast.map((dayForecast) => {
    const dayDate = new Date(dayForecast.dt * 1000)
    return Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(dayDate)
  })

  const humidityData = dailyForecast.map((dayForecast) => dayForecast.humidity)

  const temperatureData = dailyForecast.map((dayForecast) => {
    const data = {
      y: dayForecast.temp.day
    }
    const iconUrl = getIconUrl(dayForecast.weather?.[0]?.icon)
    if (iconUrl) {
      data.marker = {
        symbol: iconUrl
      }
    }
    return data
  })

  const options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: `Weather forecast for ${areaName}`
    },
    subtitle: {
      text: 'Source: OpenWeather'
    },
    xAxis: {
      categories: days
    },
    yAxis: [
      {
        title: {
          text: 'Temperature'
        },
        labels: {
          formatter: function () {
            return this.value + '°C'
          }
        }
      },
      {
        title: {
          text: 'Humidity (%)'
        },
        labels: {
          formatter: function () {
            return this.value + '%'
          }
        },
        opposite: true,
        min: 0,
        max: 100
      }
    ],
    tooltip: {
      shared: true,
      formatter: function (tooltip) {
        let tooltipContent = tooltip.defaultFormatter.call(this, tooltip)
        return tooltipContent
      }
    },
    series: [
      {
        type: 'column',
        name: 'Humidity',
        data: humidityData,
        tooltip: {
          valueSuffix: '%'
        },
        yAxis: 1
      },
      {
        type: 'spline',
        name: 'Day temperature',
        data: temperatureData,
        tooltip: {
          valueSuffix: '°C'
        }
      }
    ],
    accessibility: {
      enabled: false
    }
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

WeatherForecastChart.propTypes = {
  areaName: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
}
