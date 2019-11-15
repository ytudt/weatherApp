import axios from 'axios'

export function getCityList (city:string) {
  return axios.get(`/api/city/list`)
}

export default { getCityList }
