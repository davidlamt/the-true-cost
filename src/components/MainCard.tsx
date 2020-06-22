/** @jsx jsx */

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { css, jsx } from '@emotion/core';

import { ReactComponent as ResetSvg } from '../images/reset.svg';
import { ExpenseDetails } from './';

import commonExpenses, { ICommonExpense } from '../static/commonExpenses';
import { primaryButtonBase, svgButtonBase } from './styles';

let expenseDivRef: HTMLDivElement | null;
let originalCardContentsHeight: number | undefined;

const MainCard: React.FunctionComponent = () => {
  const [selectedExpense, setSelectedExpense] = useState<ICommonExpense | null>(null);
  const [manualExpense, setManualExpense] = useState('');

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
                height: 25px;
                left: 20px;
                padding: 0;
                position: absolute;
                transition: transform 0.3s ease;
                width: 25px;

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
                height: 100%;
                width: 100%;
              `}
            />
          </button>
        )}
        <h3
          css={css`
            max-width: 70%;
          `}
        >
          {title}
        </h3>
      </div>
      <CSSTransition in={!!selectedExpense} timeout={2000} classNames="fade">
        <div
          css={css`
            height: auto;
            min-height: ${originalCardContentsHeight || 50}px;
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
          ref={(ref) => {
            if (ref && ref.clientHeight && !originalCardContentsHeight) {
              // Full Height minus padding
              originalCardContentsHeight = ref.clientHeight - 100;
            }
          }}
        >
          {!selectedExpense && (
            <div>
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
                        width: ${commonExpense.imageWidth || 50}px;
                        margin-bottom: 10px;

                        &:hover {
                          transform: scale(1.3);
                        }
                      `,
                    ]}
                    key={commonExpense.name}
                    onClick={() => setSelectedExpense(commonExpense)}
                  >
                    {commonExpense.imageComponent && <commonExpense.imageComponent />}
                  </button>
                ))}
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  margin-top: 30px;
                `}
              >
                <input
                  css={css`
                    background-color: #ebebeb;
                    border-bottom-left-radius: 5px;
                    border-top-left-radius: 5px;
                    border: 1px solid transparent;
                    outline: none;
                    padding: 15px;
                    transition: background-color 0.3s ease;

                    &:focus {
                      background-color: #fff;
                      border: 1px solid #ebebeb;
                    }
                  `}
                  onChange={(e) => e.target.validity.valid && setManualExpense(e.target.value)}
                  pattern="[0-9]*"
                  placeholder="Enter your own"
                  value={manualExpense}
                />
                <button
                  css={[
                    primaryButtonBase,
                    css`
                      border-bottom-left-radius: 0;
                      border-top-left-radius: 0;
                    `,
                  ]}
                  disabled={!manualExpense}
                  onClick={() =>
                    setSelectedExpense({
                      name: 'Your guilty pleasure',
                      monthlyCost: +manualExpense,
                      description:
                        'Is this expense really worth it? There is no right answer - not everything has to be fiscal-centric. Just make sure you understand the _true_ cost when weighing your options!',
                    })
                  }
                >
                  Calculate
                </button>
              </div>
            </div>
          )}
          <div ref={(ref) => (expenseDivRef = ref)}>
            {selectedExpense && <ExpenseDetails expense={selectedExpense} />}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default MainCard;
