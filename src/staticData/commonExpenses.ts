export interface ICommonExpense {
  name: string;
  cost: number;
  description: string;
}

const commonExpenses: ICommonExpense[] = [
  { name: 'Coffee', cost: 1.15, description: 'Wow much expensive' },
];

export default commonExpenses;
