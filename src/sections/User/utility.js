import { ANNUAL_INCOME_LIMIT, CARD_TYPE } from '../../common/constants';

/**
 * getFilteredCards function will filter an array of object based on user id
 * user employmentStatus and user annualIncome. It will return cards only applicable on user information
 *
 * @param {array} allCards
 * @param {object} user
 * @returns array of filtered cards
 */
export const getFilteredCards = (allCards, user) =>
  allCards.filter(
    (card) =>
      card.id === CARD_TYPE.ANYWHERE ||
      (!('employmentStatus' in user) && card.id === CARD_TYPE.STUDENT) ||
      (user.employmentStatus === 'Student' && card.id === CARD_TYPE.STUDENT) ||
      (user.annualIncome > ANNUAL_INCOME_LIMIT && card.id === CARD_TYPE.LIQUID)
  );

/**
 * getCheckboxList function will create a new array of object based on the cards
 *
 * @param {array} filteredCards
 * @returns array of new objects based on the filteredCards
 */
export const getCheckboxList = (filteredCards) =>
  filteredCards.map((card) => {
    return { id: card.id, value: card.id, label: card.name };
  });

/**
 * getCardListSelected function will return selected cards into a new array
 *
 * @param {array} filteredCards
 * @param {array} selectedIds | array with card ids selected
 * @returns array selectedCards
 */
export const getCardListSelected = (filteredCards, selectedIds) =>
  filteredCards.filter((card) => selectedIds.includes(card.id));

/**
 * getTotalCredit function will return totalCredit available based
 * on the cards selected
 *
 * @param {array} items | array with cards object containing creditAvailable
 * @returns array selectedCards
 */
export const getTotalCredit = (items) =>
  items.reduce((acc, item) => {
    return acc + item.creditAvailable;
  }, 0);
