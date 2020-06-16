/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';

import ExpenseDetails from './ExpenseDetails';

import commonExpenses, { ICommonExpense } from '../static/commonExpenses';

import { primaryButtonBase } from './styles';

const CalculationPane: React.FunctionComponent = () => {
  const [selectedExpense, setSelectedExpense] = useState<ICommonExpense | null>(null);

  return (
    <div>
      {!selectedExpense && (
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
              css={primaryButtonBase}
              key={commonExpense.name}
              onClick={() => setSelectedExpense(commonExpense)}
            >
              {commonExpense.name}
            </button>
          ))}
          <input placeholder="Enter your own" />
        </div>
      )}
      {selectedExpense && <ExpenseDetails expense={selectedExpense} />}
    </div>
  );
};

export default CalculationPane;
