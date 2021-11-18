// @flow

import axios from 'axios'

const buildURL = (query: string | Object, apiKey: string): string => {
  if (typeof query === 'string') {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=6688b23c1ddba0ba89f68810fcac0b87
    `
  }
  return `https://api.openweathermap.org/data/2.5/forecast?lat=${query.lat}&lon=${query.lon}&units=metric&appid=6688b23c1ddba0ba89f68810fcac0b87`
}

const getData = async (query: string | Object) => {
  const url = buildURL(query, process.env.REACT_APP_WEATHER_KEY)
  try {
    const res = await axios.get(url)
    return await res
  } catch (err) {
    console.log(err, 'ERROR')
  }
}

export default getData
