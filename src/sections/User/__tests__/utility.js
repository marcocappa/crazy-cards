import { getFilteredCards } from '../utility';
import { cards as mockCards } from '../../../mockData/cardsData';
import { ANNUAL_INCOME_LIMIT } from '../../../common/constants';

describe('getFilteredCards function', () => {
  const anywhereCard = {
    apr: 33.9,
    btod: 0,
    creditAvailable: 300,
    id: 'anywhere',
    name: 'Anywhere Card',
    pod: 0,
  };
  const studentCard = {
    id: 'student',
    name: 'Student Life',
    apr: 18.9,
    btod: 0,
    pod: 6,
    creditAvailable: 1200,
  };
  const liquidCard = {
    id: 'liquid',
    name: 'Liquid Card',
    apr: 33.9,
    btod: 0,
    pod: 6,
    creditAvailable: 3000,
  };

  it('should filter cards and return anywhere card only', () => {
    const anywhereCard = {
      apr: 33.9,
      btod: 0,
      creditAvailable: 300,
      id: 'anywhere',
      name: 'Anywhere Card',
      pod: 0,
    };
    const user = {
      annualIncome: ANNUAL_INCOME_LIMIT,
      employmentStatus: 'Part Time',
    };

    expect(getFilteredCards(mockCards, user)).toEqual([anywhereCard]);
  });

  it('should filter cards and return anywhere and student card', () => {
    const user = {
      annualIncome: ANNUAL_INCOME_LIMIT,
      employmentStatus: 'Student',
    };

    expect(getFilteredCards(mockCards, user)).toEqual([
      studentCard,
      anywhereCard,
    ]);
  });

  it('should filter cards and return anywhere and liquid card', () => {
    const user = {
      annualIncome: ANNUAL_INCOME_LIMIT + 1,
      employmentStatus: 'Part Time',
    };

    expect(getFilteredCards(mockCards, user)).toEqual([
      anywhereCard,
      liquidCard,
    ]);
  });

  it('should filter cards and return all cards', () => {
    const user = {
      annualIncome: ANNUAL_INCOME_LIMIT + 1,
      employmentStatus: 'Student',
    };

    expect(getFilteredCards(mockCards, user)).toEqual([
      studentCard,
      anywhereCard,
      liquidCard,
    ]);
  });
});
