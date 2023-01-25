import axios from 'axios'

// eslint-disable-next-line no-undef
const API_ENDPOINT = process.env.PUBLIC_URL + '/data'
const API_CITIES_ENDPOINT = `${API_ENDPOINT}/cities.json`

export async function getCities() {
  try {
    const res = await axios.get(API_CITIES_ENDPOINT)
    return Object.values(res.data)
  } catch (e) {
    console.error('Could not fetch cities ', e)
    return []
  }
}
