import React from 'react';
import { shallow } from 'enzyme';
import CardUser from '../index';

describe('<CardUser />', () => {
  const props = {
    title: 'Mr.',
    firstname: 'Tom',
    lastname: 'Brady',
    dateOfBirth: new Date(2021, 2, 8),
    employmentStatus: 'Student',
    annualIncome: 5000,
    houseNumber: 310,
    postcode: 'E2 8NP',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<CardUser {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
