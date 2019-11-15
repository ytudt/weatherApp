import axios from 'axios'

export function getWetherByCity (city:string) {
  return axios.get(`/api/wether/WeatherApi?city=${city}`)
}

export default { getWetherByCity }
