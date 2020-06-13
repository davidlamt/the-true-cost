/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { primayButtonBase } from './styles';

const CalculationPane: React.FunctionComponent = () => {
  return (
    <div>
      <p
        css={css`
          font-size: 1.25em;
        `}
      >
        Common Monthly Expenses:
      </p>
      <button css={primayButtonBase}>Coffee</button>
      <input placeholder="Enter your own" />
    </div>
  );
};

export default CalculationPane;
