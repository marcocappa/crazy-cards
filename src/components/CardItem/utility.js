import React from 'react';
import { IconAnywhere, IconLiquid, IconStudent, IconCards } from '../Icons';

export const getCardIcon = (id) => {
  switch (id) {
    case 'student':
      return <IconStudent />;
    case 'anywhere':
      return <IconAnywhere />;
    case 'liquid':
      return <IconLiquid />;
    default:
      return <IconCards />;
  }
};
