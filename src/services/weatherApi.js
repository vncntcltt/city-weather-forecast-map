import axios from 'axios'

const OPEN_WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/'
const OPEN_WEATHER_ONE_CALL_ENDPOINT = `${OPEN_WEATHER_API_ENDPOINT}/onecall`

export async function getWeather(lat, lon, apiKey) {
  try {
    const endpoint = `${OPEN_WEATHER_ONE_CALL_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${apiKey}&exclude=hourly,minutely,alerts&units=metric`
    const res = await axios.get(endpoint)
    return res.data
  } catch (e) {
    console.error('Could not fetch weather forecast ', e)
    return null
  }
}
