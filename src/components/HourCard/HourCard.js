// @flow

import React from 'react'
import {
  WiDegrees as IconWiDegrees,
  WiHumidity as IconWiHumidity,
} from 'react-icons/wi'
import makeStyles from './HourCard.styles'

type Props = {
  hour: string,
  temp: number,
  humidity: number,
  feelsLike: number,
}

const DayCard = (props: Props) => {
  const { hour, temp, humidity, feelsLike } = props
  const classes = makeStyles()

  return (
    <div className={classes.root}>
      <p>{hour}h</p>

      <div className={classes.infoContainer}>
        <div className={classes.info}>
          <h2>{temp}</h2>
          <IconWiDegrees className={classes.degreesIcon} />
        </div>
        <div className={classes.info}>
          <h3>{humidity}</h3>
          <IconWiHumidity className={classes.humidityIcon} />
        </div>
        <div className={classes.info}>
          <span className={classes.feelsLike}>feels</span>
          <h3>{feelsLike}</h3>
        </div>
      </div>
    </div>
  )
}

export default DayCard
