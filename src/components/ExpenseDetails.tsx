/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import ReactMarkdown from 'react-markdown';

import { ICommonExpense } from '../static/commonExpenses';
import { calculateCompoundInterest } from '../utils';
import { primaryButtonBase } from './styles';

const timeframes = [10, 20, 30, 40];

interface IExpenseDetailsProps {
  expense: ICommonExpense;
}

const ExpenseDetails: React.FunctionComponent<IExpenseDetailsProps> = ({
  expense,
}: IExpenseDetailsProps) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState(10);

  const yearlyCost = expense.monthlyCost * 12;
  const totalCost = (yearlyCost * selectedTimeframe).toFixed(2);
  const totalOpportunityCost = calculateCompoundInterest(yearlyCost, selectedTimeframe).toFixed(2);

  return (
    <div
      css={css`
        line-height: 1.5;
        text-align: left;
      `}
    >
      <div
        css={css`
          font-size: 1.5em;
          margin-bottom: 20px;
          text-align: center;
        `}
      >
        In {selectedTimeframe} years, you could have had{' '}
        <span
          css={css`
            font-size: 1.5em;
          `}
        >
          ${totalOpportunityCost}
          <sup>*</sup>
        </span>{' '}
        instead...
      </div>
      <div>
        While you only spent ${totalCost}, the opportunity cost is your real enemy. The number above
        shows you what could have been if you took the monthly expense and invested it instead.
      </div>
      <ReactMarkdown source={expense.description} />
      <div>
        <sup>*</sup>This calculation was made assuming an 8% average annual return
      </div>
      <div
        css={css`
          position: relative;
          margin: 30px;
          height: 1px;

          &:before {
            content: '';
            position: absolute;
            left: 5%;
            width: 90%;
            height: 1px;
            background-image: linear-gradient(to right, transparent, rgb(48, 49, 51), transparent);
          }
        `}
      ></div>
      <div>
        <div
          css={css`
            margin-bottom: 20px;
            text-align: center;
          `}
        >
          Want to feel even worse? Let&#39;s see what would have happened over a longer period.
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
          `}
        >
          {timeframes.map((otherTimeframe) => (
            <button
              css={primaryButtonBase}
              key={otherTimeframe}
              onClick={() => setSelectedTimeframe(otherTimeframe)}
              disabled={otherTimeframe === selectedTimeframe}
            >
              {otherTimeframe} Years
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
