// @flow
import { cx } from '@emotion/css'
import IconButton from '../IconButton'
import makeStyles from './SideMenu.styles'
import { CgClose as IconClose } from 'react-icons/cg'
import { useEffect } from 'react/cjs/react.development'

type Props = {
  onClose: Function,
  value: 'string',
  setValue: Function,
  onGetDataClick: Function,
  classes: {
    root: ?string,
  },
}

const SideMenu = (props: Props) => {
  const {
    onClose,
    value,
    setValue,
    onGetDataClick,
    classes: extendedClasses,
  } = props

  const classes = makeStyles()

  const rootClasses = cx(classes.root, extendedClasses && extendedClasses.root)

  return (
    <div className={rootClasses}>
      <IconButton classes={{ root: classes.iconCloseButton }} onClick={onClose}>
        <IconClose className={classes.iconCLose} />
      </IconButton>

      <div className={classes.controlContainer}>
        <label htmlFor="city" className={classes.label}>
          Get the weather for any city
        </label>
        <input
          id="city"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={classes.control}
        />
        <button
          className={
            value ? classes.actionSearch : classes.actionSearchDisabled
          }
          disabled={!value}
          onClick={onGetDataClick}
        >
          Get Weather Info
        </button>
      </div>
    </div>
  )
}

export default SideMenu
