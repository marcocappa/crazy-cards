import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../index';

// mock checkForm utility function
import { checkForm, getToday } from '../utility';
jest.mock('../utility');
getToday.mockReturnValue('2021-03-08');

describe('<UserForm />', () => {
  const onSubmit = jest.fn();
  const props = {
    onSubmit,
  };

  let wrapper;
  beforeEach(() => (wrapper = shallow(<UserForm {...props} />)));

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle inputs changes', () => {
    const title = 'Mr.';
    const firstname = 'FirstName';
    const lastname = 'LastName';
    const employmentStatus = 'Student';
    const annualIncome = 10000;
    const houseNumber = 100;
    const postcode = 'E2 37P';

    // title select
    wrapper.find('[name="title"]').simulate('change', { value: title });
    expect(wrapper.find('[name="title"]').props().value).toEqual({
      label: title,
      value: title,
    });

    // firstname
    wrapper
      .find('[name="firstname"]')
      .simulate('change', { target: { value: firstname } });
    expect(wrapper.find('[name="firstname"]').props().value).toEqual(firstname);

    // lastname
    wrapper
      .find('[name="lastname"]')
      .simulate('change', { target: { value: lastname } });
    expect(wrapper.find('[name="lastname"]').props().value).toEqual(lastname);

    // employmentStatus select
    wrapper
      .find('[name="employmentStatus"]')
      .simulate('change', { value: employmentStatus });
    expect(wrapper.find('[name="employmentStatus"]').props().value).toEqual({
      label: employmentStatus,
      value: employmentStatus,
    });

    //annualIncome
    wrapper
      .find('[name="annualIncome"]')
      .simulate('change', { target: { value: annualIncome } });
    expect(wrapper.find('[name="annualIncome"]').props().value).toEqual(
      annualIncome
    );

    // houseNumber
    wrapper
      .find('[name="houseNumber"]')
      .simulate('change', { target: { value: houseNumber } });
    expect(wrapper.find('[name="houseNumber"]').props().value).toEqual(
      houseNumber
    );

    // postcode
    wrapper
      .find('[name="postcode"]')
      .simulate('change', { target: { value: postcode } });
    expect(wrapper.find('[name="postcode"]').props().value).toEqual(postcode);
  });

  it('should invoke onSubmit', () => {
    checkForm.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const preventDefault = jest.fn();

    // no error message on the form at the beginning
    expect(wrapper.exists('.crazy-card-user-form__error')).toEqual(false);

    // on submit:
    wrapper.find('button').simulate('click', { preventDefault });

    // invoke preventDefault, find error message avoid to call onSubmit
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(0);
    expect(wrapper.exists('.crazy-card-user-form__error')).toEqual(true);

    // invoke preventDefault and onSubmit with no errors
    wrapper.find('button').simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(2);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(wrapper.exists('.crazy-card-user-form__error')).toEqual(false);
  });
});
