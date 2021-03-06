import React from 'react';
import { getCardIcon } from '../utility';
import { IconAnywhere, IconLiquid, IconStudent, IconCards } from '../../Icons';

describe('getCardIcon function', () => {
  it('should return a specific card icon', () => {
    const cardIds = [
      {
        id: 'card-0',
        name: 'Student Life',
      },
      {
        id: 'card-1',
        name: 'Anywhere Card',
      },
      {
        id: 'card-2',
        name: 'Liquid Card',
      },
      {
        id: 'unknown-id',
        name: 'Generic Icon Card',
      },
    ];

    expect(getCardIcon(cardIds[0].id)).toEqual(<IconStudent />);
    expect(getCardIcon(cardIds[1].id)).toEqual(<IconAnywhere />);
    expect(getCardIcon(cardIds[2].id)).toEqual(<IconLiquid />);
    expect(getCardIcon(cardIds[3].id)).toEqual(<IconCards />);
  });
});
