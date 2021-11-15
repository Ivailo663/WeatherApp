// @flow

import { css } from '@emotion/css'

const makeStyles = () => {
  return {
    root: css`
      width: 400px;
      height: 300px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.25);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        margin: 0;
        font-weight: 500;
      }
    `,
    header: css`
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
      }
    `,
    coord: css`
      && {
        margin-right: 0.5rem;
      }
    `,
    main: css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    name: css`
      font-size: 2.5rem;
    `,
    sunStateContainer: css`
      display: flex;
      > div {
        display: flex;
        align-items: center;
        margin: 0 0.5rem;
      }
    `,
    icon: css`
      font-size: 2rem;
      margin-right: 0.5rem;

      path {
        color: #e5e54d;
      }
    `,
  }
}

export default makeStyles
