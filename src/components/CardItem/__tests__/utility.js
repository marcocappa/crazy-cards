import React from 'react';
import { getCardIcon } from '../utility';
import { IconAnywhere, IconLiquid, IconStudent } from '../../Icons';

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
    ];

    expect(getCardIcon(cardIds[0].id)).toEqual(<IconStudent />);
    expect(getCardIcon(cardIds[1].id)).toEqual(<IconAnywhere />);
    expect(getCardIcon(cardIds[2].id)).toEqual(<IconLiquid />);
  });
});
