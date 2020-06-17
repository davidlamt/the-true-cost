/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { Header, MainCard } from './components';

const App: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Header />
      <MainCard />
    </div>
  );
};

export default App;
