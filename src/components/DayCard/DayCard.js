// @flow

import React from 'react'
import type { Node } from 'react'
import { format } from 'date-fns'
import makeStyles from './DayCard.styles'

type Props = {
  children: Node,
  element: Object,
}

const adjustDateFormat = (element): string => {
  if (!element) {
    return 'format fail'
  }
  return format(new Date(element && element[0].dt_txt.substring(0, 10)), 'EEEE')
}

const DayCard = (props: Props) => {
  const { children, element } = props
  const classes = makeStyles()

  const adjustedDateFormat = adjustDateFormat(element)

  return (
    <div className={classes.root}>
      <p className={classes.day}>{adjustedDateFormat}</p>
      <div className={classes.hoursContainer}>{children}</div>
    </div>
  )
}

export default DayCard
