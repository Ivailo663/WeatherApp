// @flow

import { useState } from 'react'

export default function useApi(apiFunction) {
  const [response, setResponse] = useState({
    data: null,
    isFetching: false,
    error: null,
    isSuccess: null,
  })
  const fetchData = () => {
    apiFunction()
      .then((res) => {
        setResponse({
          ...response,
          data: res,
          isFetching: false,
          isSuccess: true,
        })
      })
      .catch((err) => {
        setResponse({
          ...response,
          isFetching: false,
          isSuccess: false,
        })
      })
  }
  return [response, fetchData]
}
