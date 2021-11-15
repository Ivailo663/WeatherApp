// @flow

import type Node from 'react'
import { cx } from '@emotion/css'
import makeStyles from './IconButton.styles'

type Props = {
  children: Node,
  classes: {
    root: ?string,
  },
}

const IconButton = (props: Props) => {
  const { children, classes: extendedClasses, ...extraProps } = props

  const classes = makeStyles()

  const rootClasses = cx(classes.root, extendedClasses && extendedClasses.root)

  return (
    <button {...extraProps} className={rootClasses}>
      {children}
    </button>
  )
}

export default IconButton
