/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';

import { ExpenseDetails } from './';

import commonExpenses, { ICommonExpense } from '../static/commonExpenses';
import { primaryButtonBase } from './styles';

const MainCard: React.FunctionComponent = () => {
  const [selectedExpense, setSelectedExpense] = useState<ICommonExpense | null>(null);

  let title = 'Choose a Monthly Expense';
  if (selectedExpense) {
    title = `${selectedExpense.name}: $${selectedExpense.monthlyCost} / month`;
  }

  return (
    <div
      css={css`
        border-radius: 5px;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
        margin: 0 10%;
      `}
    >
      <h3
        css={css`
          align-items: center;
          background-color: #364958;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          color: white;
          display: flex;
          height: 50px;
          justify-content: center;
          margin: 0;
          padding: 0;
        `}
      >
        {title}
      </h3>
      <div
        css={css`
          padding: 50px;
        `}
      >
        {!selectedExpense && (
          <div>
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
    </div>
  );
};

export default MainCard;
