/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <h1
        css={css`
          -webkit-text-fill-color: transparent;
          background: repeating-linear-gradient(270deg, #55828b, #364958);
          font-size: 3em;
          margin: auto;
          text-align: center;
          width: fit-content;
          -webkit-background-clip: text;
        `}
      >
        The True Cost
      </h1>
      <h2
        css={css`
          font-size: 1.5em;
        `}
      >
        What is it <i>really</i> costing you?
      </h2>
    </header>
  );
};

export default Header;
