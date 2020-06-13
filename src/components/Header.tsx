/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <h1
        css={css`
          font-size: 3em;
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
