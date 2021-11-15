/* eslint-disable react-hooks/exhaustive-deps */
// @flow

import { useEffect } from 'react'
import { getData } from '../services'

const useGeolocationApi = (onSuccess: Function) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getData({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
        .then((res) => {
          onSuccess(res)
        })
        .catch((err) => {
          console.warn(err)
        })
    })
  }, [])
}

export default useGeolocationApi
