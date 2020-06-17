/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

import { Header, MainCard } from './components';

const App: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        height: 100%;
        margin: 0 auto;
        max-width: 60em;
        padding: 50px 0;
        text-align: center;
      `}
    >
      <Header />
      <MainCard />
    </div>
  );
};

export default App;
