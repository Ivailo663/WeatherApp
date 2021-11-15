// @flow

import { css } from '@emotion/css'

const makeStyles = () => {
  return {
    root: css`
      position: relative;
      background: #1c1b1e;
      width: 600px;
      display: none;
      height: 100vh;
      padding: 20px;
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;
      z-index: 10;
    `,
    iconCloseButton: css`
      position: absolute;
      top: 20px;
      left: 20px;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      font-size: 2.5rem;
    `,
    iconCLose: css`
      path {
        color: #fff;
      }
    `,
    controlContainer: css`
      margin-top: 5rem;
    `,
    control: css`
      width: 100%;
      border-radius: 8px;
      padding: 0.75rem;
      background: #fff;
      font-size: 1.5rem;
      color: #000;
      border: none;

      &:focus {
        outline: 2px solid #9b9b9b;
      }
    `,
    label: css`
      color: #fff;
      display: block;
      margin-bottom: 0.75rem;
    `,
    actionSearchDisabled: css`
      width: 100%;
      padding: 0.7rem 0;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 400;
      border: 3px solid #d1d1d1;
      color: #bfbfbf;
      background: #d1d1d1;

      &:active {
        outline: none;
        border: 3px solid #d1d1d1;
      }
    `,
    actionSearch: css`
      background: #8fe7b2;
      width: 100%;
      padding: 0.7rem 0;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 400;
      border: 3px solid #39bf56;
      color: #39bf56;
      cursor: pointer;
    `,
  }
}

export default makeStyles
