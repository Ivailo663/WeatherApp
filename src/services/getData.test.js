import getData from './getData'

import axios from 'axios'
jest.mock('axios')

const query = 'London'
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`

const exampleResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5073,
      lon: -0.1277,
    },
    country: 'GB',
    timezone: 0,
    sunrise: 1578384285,
    sunset: 1578413272,
  },
}

describe('fetchData', () => {
  it('should return weather data', async () => {
    axios.get.mockResolvedValueOnce(exampleResponse)
    const result = await getData(query, url)

    expect(axios.get).toHaveBeenCalledWith(url)
    expect(result).toEqual(exampleResponse)
  })
})
