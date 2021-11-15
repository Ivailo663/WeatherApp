// @flow

import { css } from '@emotion/css'

const makeStyles = () => {
  return {
    root: css`
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    `,
    menuIconButton: css`
      position: absolute;
      top: 35px;
      right: 35px;
    `,
    menuIcon: css`
      font-size: 2.5rem;
    `,
    cityCardContainer: css`
      padding-top: 10%;
      margin-bottom: 12%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    carouselContainer: css`
      display: flex;
      flex-direction: row;
      padding-bottom: 5rem;
      width: 100%;
    `,
    locationControls: css`
      margin-bottom: 2rem;

      > * {
        margin: 0 0.5rem;
        font-size: 1rem;
        path {
          color: #fff;
        }
      }
    `,
    sideMenuOpen: css`
      display: block;
    `,
    fallbackMessage: css`
      font-size: 1.2rem;
      text-decoration: underline;
      cursor: pointer;
    `,
  }
}

export default makeStyles
