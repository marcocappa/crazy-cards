import React from 'react';
import CardItem from '../index';
import { shallow } from 'enzyme';

describe('<CardItem />', () => {
  it('should match snapshot', () => {
    const mockProps = {
      className: 'additional-class',
      id: 'card-0',
      name: 'Student Life',
      apr: 18.9,
      btod: 0,
      pod: 6,
      creditAvailable: 1200,
    };

    const wrapper = shallow(<CardItem {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
