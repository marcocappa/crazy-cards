import React from 'react';
import CardList from '../index';
import { shallow } from 'enzyme';
import { beforeEach, expect } from '@jest/globals';
import { CARD_TYPE } from '../../../common/constants';

describe('<CardList />', () => {
  const mockProps = {
    items: [
      {
        id: CARD_TYPE.STUDENT,
        name: 'Student Life',
        apr: 18.9,
        btod: 0,
        pod: 6,
        creditAvailable: 1200,
      },
      {
        id: CARD_TYPE.ANYWHERE,
        name: 'Anywhere Card',
        apr: 33.9,
        btod: 0,
        pod: 0,
        creditAvailable: 300,
      },
      {
        id: CARD_TYPE.LIQUID,
        name: 'Liquid Card',
        apr: 33.9,
        btod: 0,
        pod: 0,
        creditAvailable: 1500,
      },
      {
        id: 'unknown',
        name: 'Other Card',
        apr: 29.9,
        btod: 0,
        pod: 0,
        creditAvailable: 400,
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
