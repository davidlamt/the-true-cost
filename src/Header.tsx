/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const Header: React.FunctionComponent = () => {
  return (
    <header
      css={css`
        text-align: center;
      `}
    >
      <h1>The True Cost</h1>
      <h2>
        What is it <i>really</i> costing you?
      </h2>
    </header>
  );
};

export default Header;
