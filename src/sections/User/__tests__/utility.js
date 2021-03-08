import {
  getFilteredCards,
  getCheckboxList,
  getCardListSelected,
  getTotalCredit,
} from '../utility';
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

describe('getCheckboxList function ', () => {
  it('should return a formatted array of object for checkbox list component', () => {
    expect(getCheckboxList(mockCards)).toEqual([
      { id: 'student', value: 'student', label: 'Student Life' },
      { id: 'anywhere', value: 'anywhere', label: 'Anywhere Card' },
      { id: 'liquid', value: 'liquid', label: 'Liquid Card' },
    ]);
  });
});

describe('getCardListSelected function ', () => {
  it('should return selected cards', () => {
    const selectedIds1 = ['student'];
    const selectedIds2 = ['anywhere'];
    const selectedIds3 = ['liquid'];
    const selectedIds4 = ['student', 'anywhere'];
    const selectedIds5 = ['student', 'liquid'];
    const selectedIds6 = ['anywhere', 'liquid'];
    const selectedIds7 = ['student', 'anywhere', 'liquid'];
    expect(getCardListSelected(mockCards, selectedIds1)).toEqual([
      mockCards[0],
    ]);
    expect(getCardListSelected(mockCards, selectedIds2)).toEqual([
      mockCards[1],
    ]);
    expect(getCardListSelected(mockCards, selectedIds3)).toEqual([
      mockCards[2],
    ]);

    expect(getCardListSelected(mockCards, selectedIds4)).toEqual([
      mockCards[0],
      mockCards[1],
    ]);
    expect(getCardListSelected(mockCards, selectedIds5)).toEqual([
      mockCards[0],
      mockCards[2],
    ]);
    expect(getCardListSelected(mockCards, selectedIds6)).toEqual([
      mockCards[1],
      mockCards[2],
    ]);
    expect(getCardListSelected(mockCards, selectedIds7)).toEqual([
      mockCards[0],
      mockCards[1],
      mockCards[2],
    ]);
  });
});

describe('getTotalCredit function ', () => {
  it('should return the total credit available', () => {
    const cards = [
      {
        creditAvailable: 1000,
      },

      {
        creditAvailable: 100,
      },

      {
        creditAvailable: 200,
      },
    ];
    expect(getTotalCredit(cards)).toEqual(1300);
  });
});
