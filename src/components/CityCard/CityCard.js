// @flow

import React from 'react'
import {
  WiHorizonAlt as IconHorizontAlt,
  WiHorizon as IconHorizon,
} from 'react-icons/wi'
import fromUnixTime from 'date-fns/fromUnixTime'
import makeStyles from './CityCard.styles'

type Props = {
  allProps: {
    name: string,
    country: string,
    population: number,
    sunrise: number,
    sunset: number,
    coord: {
      lat: number,
      lon: number,
    },
  },
}

const extractTime = (date: Object): string =>
  fromUnixTime(date).toString().split(' ')[4]

const CityCard = (props: Props) => {
  const { name, country, population, sunrise, sunset, coord } = props.allProps

  const classes = makeStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <p className={classes.coord}>{`lat: ${coord.lat}`}</p>
          <p className={classes.coord}>{`lon: ${coord.lon}`}</p>
        </div>
        <p>{country}</p>
      </div>
      <div className={classes.main}>
        <h2 className={classes.name}>{name}</h2>
        <div className={classes.sunStateContainer}>
          <div>
            <IconHorizontAlt className={classes.icon} />{' '}
            <p>{extractTime(sunrise)}</p>
          </div>
          <div>
            <IconHorizon className={classes.icon} />
            <p>{extractTime(sunset)}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{`Population: ${population}`}</p>
      </div>
    </div>
  )
}

export default CityCard
