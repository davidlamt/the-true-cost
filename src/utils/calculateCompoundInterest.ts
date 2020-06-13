const calculateCompoundInterest = (
  annualAdditions: number,
  yearsToGrow: number,
  {
    currentPrincipal = 0,
    interestRate = 8,
  }: {
    currentPrincipal?: number;
    interestRate?: number;
  } = {}
): number => {
  let total = currentPrincipal;

  while (yearsToGrow > 0) {
    total += annualAdditions;
    total = total * (1 + interestRate / 100);
    yearsToGrow--;
  }

  return total;
};

export default calculateCompoundInterest;
