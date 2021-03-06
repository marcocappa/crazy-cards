import React from 'react';
import CardList from '../index';
import { shallow } from 'enzyme';
import { beforeEach, expect } from '@jest/globals';

describe('<CardList />', () => {
  const mockProps = {
    items: [
      {
        id: 'card-0',
        name: 'Student Life',
        apr: 18.9,
        btod: 0,
        pod: 6,
        creditAvailable: 1200,
      },
      {
        id: 'card-1',
        name: 'Anywhere Card',
        apr: 33.9,
        btod: 0,
        pod: 0,
        creditAvailable: 300,
      },
    ],
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardList {...mockProps} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should find ul children to be equal to prop items length', () => {
    expect(wrapper.find('ul').children().length).toEqual(
      mockProps.items.length
    );
  });
});
