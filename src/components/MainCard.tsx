/** @jsx jsx */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { css, jsx } from '@emotion/core';

import { ReactComponent as ResetSvg } from '../images/reset.svg';
import { ExpenseDetails } from './';

import commonExpenses, { ICommonExpense } from '../static/commonExpenses';
import { svgButtonBase } from './styles';

let expenseDivRef: HTMLDivElement | null;

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
      <div
        css={css`
          align-items: center;
          background-color: #364958;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          color: white;
          display: flex;
          justify-content: center;
          margin: 0;
          min-height: 50px;
          padding: 0;
          position: relative;
        `}
      >
        {selectedExpense && (
          <button
            css={[
              svgButtonBase,
              css`
                display: flex;
                left: 10px;
                position: absolute;
                transition: transform 0.3s ease;

                &:hover {
                  transform: rotate(-180deg);
                }
              `,
            ]}
            onClick={() => setSelectedExpense(null)}
          >
            <ResetSvg
              css={css`
                fill: #fff;
                width: 25px;
              `}
            />
          </button>
        )}
        <h3
          css={css`
            max-width: 250px;
          `}
        >
          {title}
        </h3>
      </div>
      <CSSTransition in={!!selectedExpense} timeout={2000} classNames="fade">
        <div
          css={css`
            height: auto;
            min-height: 50px;
            padding: 50px;

            &.fade-enter {
              max-height: 0;
              opacity: 0;
            }

            &.fade-enter-active {
              max-height: 1000px;
              opacity: 1;
              transition: opacity 2s ease, max-height 1s ease;
            }

            &.fade-exit {
              height: ${expenseDivRef ? expenseDivRef.clientHeight : 0}px;
              opacity: 0;
            }

            &.fade-exit-active {
              height: 0;
              opacity: 1;
              transition: opacity 1s ease, height 1s ease;
            }
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
                  css={[
                    svgButtonBase,
                    css`
                      transition: transform 0.3s ease;
                      width: 50px;

                      &:hover {
                        transform: scale(1.3);
                      }
                    `,
                  ]}
                  key={commonExpense.name}
                  onClick={() => setSelectedExpense(commonExpense)}
                >
                  <commonExpense.imageComponent />
                </button>
              ))}
              <input placeholder="Enter your own" />
            </div>
          )}
          <div ref={(ref) => (expenseDivRef = ref)}>
            {selectedExpense && <ExpenseDetails css={css``} expense={selectedExpense} />}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MainCard;
