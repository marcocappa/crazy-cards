import React from 'react';
import { shallow } from 'enzyme';
import User from '../index';

describe('<User />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });
});
