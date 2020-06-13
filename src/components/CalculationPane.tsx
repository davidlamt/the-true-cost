/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';

import commonExpenses, { ICommonExpense } from '../staticData/commonExpenses';

import { primayButtonBase } from './styles';

const CalculationPane: React.FunctionComponent = () => {
  const [selectedExpense, setSelectedExpense] = useState<ICommonExpense | null>(null);

  return (
    <div>
      <p
        css={css`
          font-size: 1.25em;
        `}
      >
        Common Monthly Expenses:
      </p>
      {commonExpenses.map((commonExpense) => (
        <button
          css={primayButtonBase}
          key={commonExpense.name}
          onClick={() => setSelectedExpense(commonExpense)}
        >
          {commonExpense.name}
        </button>
      ))}
      {selectedExpense && (
        <div>
          {selectedExpense.cost} / {selectedExpense.description}
        </div>
      )}
      <input placeholder="Enter your own" />
    </div>
  );
};

export default CalculationPane;
