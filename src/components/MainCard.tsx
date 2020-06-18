/** @jsx jsx */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { css, jsx } from '@emotion/core';

import { ExpenseDetails } from './';

import commonExpenses, { ICommonExpense } from '../static/commonExpenses';

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
          min-height: 50px;
          height: auto;
        `}
      >
        {!selectedExpense && (
          <div
            css={css`
              align-items: center;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
            `}
          >
            {commonExpenses.map((commonExpense) => (
              <button
                css={css`
                  background-color: transparent;
                  border: none;
                  cursor: pointer;
                  outline: none;
                  transition: transform 0.3s ease;
                  width: 50px;

                  &:hover {
                    transform: scale(1.3);
                  }
                `}
                key={commonExpense.name}
                onClick={() => setSelectedExpense(commonExpense)}
              >
                <commonExpense.imageComponent />
              </button>
            ))}
            <input placeholder="Enter your own" />
          </div>
        )}
        <CSSTransition in={!!selectedExpense} timeout={2000} classNames="fade">
          <div
            css={css`
              &.fade-enter {
                max-height: 0;
                opacity: 0;
              }

              &.fade-enter-active {
                max-height: 1000px;
                opacity: 1;
                transition: opacity 2s, max-height 1s;
              }

              &.fade-exit {
                max-height: 1000px;
                opacity: 1;
              }

              &.fade-exit-active {
                max-height: 0;
                opacity: 0;
                transition: opacity 2s, max-height 1s;
              }
            `}
          >
            {selectedExpense && <ExpenseDetails css={css``} expense={selectedExpense} />}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MainCard;
