import { css } from '@emotion/core';

const primaryButtonBase = css`
  background-color: #5d9198;
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #466d72;
  }

  &:disabled {
    background-color: #c0d5d8;
    cursor: not-allowed;
  }
`;

export { primaryButtonBase };
