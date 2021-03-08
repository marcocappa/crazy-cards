import React from 'react';
import { IconAnywhere, IconLiquid, IconStudent, IconCards } from '../Icons';
import { CARD_TYPE } from '../../common/constants';

export const getCardIcon = (id) => {
  switch (id) {
    case CARD_TYPE.STUDENT:
      return <IconStudent />;
    case CARD_TYPE.ANYWHERE:
      return <IconAnywhere />;
    case CARD_TYPE.LIQUID:
      return <IconLiquid />;
    default:
      return <IconCards />;
  }
};
