import React from 'react';
import { getCardIcon } from '../utility';
import { IconAnywhere, IconLiquid, IconStudent, IconCards } from '../../Icons';
import { CARD_TYPE } from '../../../common/constants';

describe('getCardIcon function', () => {
  it('should return a specific card icon', () => {
    const cardIds = [
      {
        id: CARD_TYPE.STUDENT,
        name: 'Student Life',
      },
      {
        id: CARD_TYPE.ANYWHERE,
        name: 'Anywhere Card',
      },
      {
        id: CARD_TYPE.LIQUID,
        name: 'Liquid Card',
      },
      {
        id: 'unknown',
        name: 'Generic Icon Card',
      },
    ];

    expect(getCardIcon(cardIds[0].id)).toEqual(<IconStudent />);
    expect(getCardIcon(cardIds[1].id)).toEqual(<IconAnywhere />);
    expect(getCardIcon(cardIds[2].id)).toEqual(<IconLiquid />);
    expect(getCardIcon(cardIds[3].id)).toEqual(<IconCards />);
  });
});
