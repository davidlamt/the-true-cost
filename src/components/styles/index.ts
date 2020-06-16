import { css } from '@emotion/core';

const primaryButtonBase = css`
  background-color: #3080df;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  height: 50px;
  min-width: 100px;
  outline: none;
  padding: 15px;
  padding: 5px;
  text-transform: uppercase;

  &:hover {
    background-color: #2b70c4;
  }
`;

export { primaryButtonBase };
