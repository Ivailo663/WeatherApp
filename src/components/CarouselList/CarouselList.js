// @flow

import React from 'react'
import DayCard from '../DayCard'
import HourCard from '../HourCard'

import makeStyles from './CarouselList.styles'
import Carousel from 'react-elastic-carousel'

//convets data into chunks of day arrays
const normalizeDaysData = (data: Object) => {
  const result = data.data.data.list.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 8)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])

  return result
}

type Props = {
  children: Function,
  location: Object,
  data: Object,
}

const CarouselList = (props: Props) => {
  const { data: dataProp, location } = props

  const classes = makeStyles()

  if (
    !dataProp[location] ||
    !dataProp[location].data ||
    !dataProp[location].data.data ||
    !dataProp[location].data.data.list
  ) {
    return null
  }

  const normalizedData = normalizeDaysData(dataProp[location])

  return (
    <Carousel itemsToShow={1} showArrows={false} initialActiveIndex={0}>
      {normalizedData.map((element, index) => (
        <div className={classes.root} key={`dayId_${index.toString()}`}>
          <DayCard key={`dayId_${index.toString()}`} element={element}>
            {element.map((day, dayIndex) => (
              <HourCard
                key={`hourId_${dayIndex.toString()}`}
                hour={day.dt_txt.substring(day.dt_txt.indexOf(' ') + 1)}
                temp={day.main.temp}
                humidity={day.main.humidity}
                feelsLike={day.main.feels_like}
              />
            ))}
          </DayCard>
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselList
