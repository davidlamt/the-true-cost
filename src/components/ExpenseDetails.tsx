/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import ReactMarkdown from 'react-markdown';

import { ICommonExpense } from '../static/commonExpenses';
import { calculateCompoundInterest } from '../utils';

interface IExpenseDetailsProps {
  expense: ICommonExpense;
}

const ExpenseDetails: React.FunctionComponent<IExpenseDetailsProps> = ({
  expense,
}: IExpenseDetailsProps) => {
  const yearlyCost = expense.cost * 12;
  const totalCost = (yearlyCost * 10).toFixed(2);
  const totalOpportunityCost = calculateCompoundInterest(yearlyCost, 10).toFixed(2);

  return (
    <div>
      <div>
        In 10 years, you could have had{' '}
        <span
          css={css`
            font-size: 2em;
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
    </div>
  );
};

export default ExpenseDetails;
