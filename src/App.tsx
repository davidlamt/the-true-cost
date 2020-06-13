/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { CalculationPane, Header } from './components';

const App: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Header />
      <CalculationPane />
    </div>
  );
};

export default App;
