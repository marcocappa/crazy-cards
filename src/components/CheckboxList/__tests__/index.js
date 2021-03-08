import React from 'react';
import { shallow } from 'enzyme';
import CheckboxList from '../index';
import Checkbox from '../../Checkbox';
import { CARD_TYPE } from '../../../common/constants';

describe('<CheckboxList />', () => {
  const onSelect = jest.fn();
  const props = {
    name: 'list',
    items: [
      {
        value: CARD_TYPE.STUDENT,
        isDisabled: false,
        label: 'Student Card',
        checked: false,
      },
      {
        value: CARD_TYPE.LIQUID,
        isDisabled: false,
        label: 'Liquid Card',
        checked: false,
      },
    ],
    onSelect,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CheckboxList {...props} />);
  });

  it('should match snapshot without items', () => {
    wrapper = shallow(
      <CheckboxList name="list-without-items" onSelect={onSelect} items={[]} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ul').length).toEqual(0);
  });

  it('should match snapshot with items', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ul').children().length).toEqual(props.items.length);
  });

  it('should invoke onSelect', () => {
    wrapper
      .find('.crazy-card-checkbox-list__checkbox')
      .at(0)
      .simulate('change');
    expect(onSelect).toHaveBeenCalledTimes(1);

    wrapper
      .find('.crazy-card-checkbox-list__checkbox')
      .at(1)
      .simulate('change');
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
});
