import { ReactComponent as CoffeeSvg } from '../images/coffee.svg';

export interface ICommonExpense {
  name: string;
  imageComponent?: React.FunctionComponent;
  monthlyCost: number;
  description: string;
}

const commonExpenses: ICommonExpense[] = [
  {
    name: 'Coffee',
    imageComponent: CoffeeSvg,
    monthlyCost: 92,
    description:
      'According to [this article](https://www.fool.com/retirement/2018/01/22/one-third-of-americans-spend-more-on-coffee-than-o.aspx), the average American spends around $92 a month on coffee. Maybe you should consider buying your own [coffee maker](https://www.amazon.com/s?k=coffee+maker)?',
  },
];

export default commonExpenses;
