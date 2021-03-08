import { ANNUAL_INCOME_LIMIT } from '../../common/constants';

export const getFilteredCards = (allCards, user) =>
  allCards.filter(
    (card) =>
      card.id === 'anywhere' ||
      (!('employmentStatus' in user) && card.id === 'student') ||
      (user.employmentStatus === 'Student' && card.id === 'student') ||
      (user.annualIncome > ANNUAL_INCOME_LIMIT && card.id === 'liquid')
  );
