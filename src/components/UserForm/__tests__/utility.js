import React from 'react';
import { checkForm } from '../utility';

describe('checkForm function', () => {
  it('should return true if user is an empty object', () => {
    const user = {};
    expect(checkForm(user)).toEqual(true);
  });

  it('should return true if user does have at least one detail undefined or empty', () => {
    const user = {
      title: 'Mr.',
      firstname: 'Test',
      lastname: 'Test',
      dateOfBirth: '19/02/1900',
      employmentStatus: 'Student',
      annualIncome: 10000,
      houseNumber: 100,
    };
    expect(checkForm(user)).toEqual(true);
  });

  it('should return false if user contains all details', () => {
    const user = {
      title: 'Mr.',
      firstname: 'Test',
      lastname: 'Test',
      dateOfBirth: '19/02/1900',
      employmentStatus: 'Student',
      annualIncome: 10000,
      houseNumber: 100,
      postcode: 'E2 N7P',
    };
    expect(checkForm(user)).toEqual(false);
  });
});
