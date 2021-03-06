import React from 'react';
import { shallow } from 'enzyme';
import IconSearch from '../index';

describe('<IconSearch />', () => {
  it('should match snapshots and check additional class', () => {
    const mockClass = 'additional-class';
    const wrapper = shallow(<IconSearch />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('svg').hasClass(mockClass)).toEqual(false);

    wrapper.setProps({ className: mockClass });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('svg').hasClass(mockClass)).toEqual(true);
  });
});
