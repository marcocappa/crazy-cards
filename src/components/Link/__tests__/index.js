import React from 'react';
import { shallow } from 'enzyme';
import Link from '../index';

describe('<Link />', () => {
  it('should match snapshot and find classname', () => {
    const wrapper = shallow(<Link to="/" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.exists('.crazy-card-link')).toEqual(true);
  });
});
