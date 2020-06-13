import { calculateCompoundInterest } from '../';

describe('calculateCompoundInterest', () => {
  test('returns the correct total when using defaults', () => {
    const total = Math.floor(calculateCompoundInterest(1000, 10));

    expect(total).toEqual(15645);
  });

  test('returns the correct total with an initial deposit', () => {
    const total = Math.floor(calculateCompoundInterest(1000, 10, { currentPrincipal: 5000 }));

    expect(total).toEqual(26440);
  });

  test('returns the correct total with a different interest rate', () => {
    const total = Math.floor(calculateCompoundInterest(1000, 10, { interestRate: 10 }));

    expect(total).toEqual(17531);
  });
});
