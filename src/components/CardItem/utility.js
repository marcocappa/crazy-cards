import React from 'react';
import { IconAnywhere, IconLiquid, IconStudent } from '../Icons';

export const getCardIcon = (id) => {
  switch (id) {
    case 'card-0':
      return <IconStudent />;
    case 'card-1':
      return <IconAnywhere />;
    case 'card-2':
      return <IconLiquid />;
    default:
      return <IconLiquid />;
  }
};
