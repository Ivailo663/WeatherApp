// @flow

import { css } from '@emotion/css'

const makeStyles = () => {
  return {
    root: css`
      display: flex;
      flex-direction: column;
      width: 80vw;
    `,
    hoursContainer: css`
      display: flex;
      justify-content: space-between;
    `,
    day: css`
      font-weight: 200;
      font-size: 1.75rem;
    `,
  }
}

export default makeStyles
