// @flow

import { css } from '@emotion/css'

const makeStyles = () => {
  return {
    root: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 3-rem;
    `,
    info: css`
      display: flex;
      position: relative;
    `,
    degreesIcon: css`
      font-size: 5rem;
      position: absolute;
      top: -8px;
      right: -42px;
    `,
    humidityIcon: css`
      font-size: 1.35rem;
      path {
        color: #6b6bd6;
      }
    `,
    feelsLike: css`
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 0.85rem;
    `,
  }
}

export default makeStyles
