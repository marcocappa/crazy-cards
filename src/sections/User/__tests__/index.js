import React from 'react';
import { shallow } from 'enzyme';
import User from '../index';
import UserForm from '../../../components/UserForm';
import CardUser from '../../../components/CardUser';
import CheckboxList from '../../../components/CheckboxList';
import CardList from '../../../components/CardList';

describe('<User />', () => {
  it('should match snapshot ', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot after submitting the form and find CardUser and CheckboxList components', () => {
    const wrapper = shallow(<User />);
    const user = {
      title: 'Mr.',
      firstname: 'Firstname',
      lastname: 'Lastname',
      dateOfBirth: new Date('2021-02-08'),
      employmentStatus: 'Student',
      annualIncome: 18000,
      houseNumber: 150,
      postcode: 'E1 8NP',
    };

    // submit user form data
    wrapper.find(UserForm).simulate('submit', user);
    // match snapshot
    expect(wrapper).toMatchSnapshot();
    // find CardUser
    expect(wrapper.exists(CardUser)).toEqual(true);
    expect(wrapper.find(CardUser).props()).toEqual(user);
    // find CheckboxList
    expect(wrapper.exists(CheckboxList)).toEqual(true);
    expect(wrapper.find(CheckboxList).props().name).toEqual('cards');

    // select one card from CheckboxList
    wrapper.find(CheckboxList).simulate('select', 'student');
    // match snapshot
    expect(wrapper).toMatchSnapshot();
    // find CardList with details
    expect(wrapper.exists(CardList)).toEqual(true);
  });
});
