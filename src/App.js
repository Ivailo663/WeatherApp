// @flow

import React, { useState } from 'react'
import makeStyles from './App.styles'

//components
import CityCard from './components/CityCard'
import SideMenu from './components/SideMenu'
import CaourselList from './components/CarouselList'
import IconButton from './components/IconButton'

//services
import { getData } from './services'

//hooks
import { useGeoLocationApi } from './hooks'

//libraries
import { GiHamburgerMenu as IconMenu } from 'react-icons/gi'
import {
  GoPrimitiveDot as IconGoPrimitiveDot,
  GoLocation as IconGoLocation,
} from 'react-icons/go'

const toggleSideMenu = (open: boolean, setOpen: Function) => {
  setOpen(open)
}

const getDataByCityId = (
  cityId: string,
  setLocationData: Function,
  setLocation: Function,
) => {
  getData(cityId)
    .then(
      (res) =>
        setLocationData({
          ...res,
          data: res,
          isFetching: false,
          isSuccess: true,
          isError: false,
        }),
      setLocation('locationData'),
    )
    .catch((err) => {
      console.warn(err, 'ERROR')
      setLocationData((prevState) => ({
        ...prevState,
        isError: true,
      }))
    })
}

const getCardProps = (props: Object): Object => {
  if (props && props.data && props.data.data && props.data.data.city) {
    return { ...props.data.data.city }
  }
  return {}
}

type CityCards = {
  geolocationData: Object,
  locationData: Object,
  location: string,
  setSideMenuOpen: Function,
  classes: Object,
}

const renderCityCards = (props: CityCards) => {
  const {
    geolocationData,
    location,
    locationData,
    setSideMenuOpen,
    classes,
  } = props
  if (location === 'geolocationData') {
    return geolocationData && geolocationData.data ? (
      <CityCard allProps={{ ...getCardProps(geolocationData) }} />
    ) : (
      <p className={classes.fallbackMessage}>
        Having problem finding your location...
      </p>
    )
  }
  return locationData && locationData.data ? (
    <CityCard allProps={{ ...getCardProps(locationData) }} />
  ) : (
    <p
      className={classes.fallbackMessage}
      onClick={() => setSideMenuOpen(true)}
    >
      Get the weather for any city
    </p>
  )
}

function App() {
  const classes = makeStyles()
  const [value, setValue] = useState('')
  const [location, setLocation] = useState('geolocationData')
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  const [geolocationData, setGeolocationData] = useState({
    data: null,
    isFetching: false,
    error: null,
    isSuccess: null,
    isError: null,
  })

  const [locationData, setLocationData] = useState({
    data: null,
    isFetching: false,
    error: null,
    isSuccess: null,
    isError: null,
  })

  useGeoLocationApi((res) =>
    setGeolocationData({
      ...res,
      data: res,
      isFetching: false,
      isSuccess: true,
      isError: false,
    }),
  )

  return (
    <div className={classes.root}>
      <IconButton
        onClick={() => toggleSideMenu(true, setSideMenuOpen)}
        classes={{ root: classes.menuIconButton }}
      >
        <IconMenu className={classes.menuIcon} />
      </IconButton>

      <div className={classes.cityCardContainer}>
        <div className={classes.locationControls}>
          <IconButton onClick={() => setLocation('geolocationData')}>
            <IconGoLocation />
          </IconButton>
          <IconButton onClick={() => setLocation('locationData')}>
            <IconGoPrimitiveDot />
          </IconButton>
        </div>
        {renderCityCards({
          geolocationData,
          locationData,
          location,
          setSideMenuOpen,
          classes,
        })}
      </div>
      <div className={classes.carouselContainer}>
        <CaourselList
          data={{ geolocationData, locationData }}
          location={location}
        />
      </div>
      <SideMenu
        classes={{ root: sideMenuOpen ? classes.sideMenuOpen : undefined }}
        onClose={() => setSideMenuOpen(false, setSideMenuOpen)}
        value={value}
        setValue={setValue}
        onGetDataClick={() =>
          getDataByCityId(value, setLocationData, setLocation)
        }
      />
    </div>
  )
}

export default App
