import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';

describe('<Checkbox />', () => {
  const onChange = jest.fn();
  const props = {
    className: 'additional-class',
    name: 'list',
    value: 'student',
    isDisabled: false,
    label: 'Student Card',
    isChecked: false,
    onChange,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke onChange', () => {
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(props.value);
  });
});
