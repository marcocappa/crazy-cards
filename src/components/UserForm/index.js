import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { checkForm, getToday } from './utility';
import './user-form.scss';

const titleOptions = [
  { value: 'Mr.', label: 'Mr.' },
  { value: 'Mrs.', label: 'Mrs.' },
  { value: 'Miss', label: 'Miss' },
];

const employmentStatusOptions = [
  { value: 'Student', label: 'Student' },
  { value: 'Part Time', label: 'Part Time' },
  { value: 'Full Time', label: 'Full Time' },
];

const initialUserState = {
  title: '',
  firstname: '',
  lastname: '',
  dateOfBirth: '',
  employmentStatus: '',
  annualIncome: 0,
  houseNumber: 0,
  postcode: '',
};

const UserForm = ({ onSubmit, today }) => {
  const [user, setUserData] = useState(initialUserState);
  const [error, setError] = useState(false);

  const handleChange = (field, value) => {
    setUserData({
      ...user,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkForm(user)) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit} className="crazy-card-user-form">
      <label>
        <span>Title:</span>
        <Select
          value={titleOptions.find((option) => option.value === user.title)}
          name="title"
          options={titleOptions}
          onChange={({ value }) => {
            handleChange('title', value);
          }}
        />
      </label>

      <label>
        <span>Firstname:</span>
        <input
          className="crazy-card-user-form__input"
          name="firstname"
          type="text"
          value={user.firstname}
          onChange={({ target: { value } }) => handleChange('firstname', value)}
        />
      </label>

      <label>
        <span>Lastname:</span>
        <input
          className="crazy-card-user-form__input"
          name="lastname"
          type="text"
          value={user.lastname}
          onChange={({ target: { value } }) => handleChange('lastname', value)}
        />
      </label>

      <label>
        <span>Data of birth:</span>
        <DatePicker
          name="dateOfBirth"
          selected={user.dateOfBirth}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDateOfBirth(date)}
          onChange={(date) => handleChange('dateOfBirth', date)}
          maxDate={getToday()}
          className="crazy-card-user-form__input"
          placeholderText="dd/MM/yyyy"
        />
      </label>

      <label>
        <span>Employment Status:</span>
        <Select
          value={employmentStatusOptions.find(
            (option) => option.value === user.employmentStatus
          )}
          name="employmentStatus"
          options={employmentStatusOptions}
          onChange={(option) => {
            handleChange('employmentStatus', option.value);
          }}
        />
      </label>

      <label>
        <span>Annual Income:</span>
        <input
          className="crazy-card-user-form__input"
          name="annualIncome"
          type="number"
          value={user.annualIncome}
          onChange={({ target: { value } }) =>
            handleChange('annualIncome', Number(value))
          }
        />
      </label>

      <label>
        <span>House Number:</span>
        <input
          className="crazy-card-user-form__input"
          name="houseNumber"
          type="number"
          value={user.houseNumber}
          onChange={({ target: { value } }) =>
            handleChange('houseNumber', Number(value))
          }
        />
      </label>

      <label>
        <span>Postcode:</span>
        <input
          className="crazy-card-user-form__input"
          name="postcode"
          type="text"
          value={user.postcode}
          onChange={({ target: { value } }) => handleChange('postcode', value)}
        />
      </label>

      <div className="crazy-card-user-form__actions">
        <button
          className="crazy-card-user-form__submit"
          type="button"
          onClick={(e) => handleSubmit(e)}
          disabled={checkForm(user)}
        >
          Submit
        </button>
      </div>

      {error && (
        <p className="crazy-card-user-form__error">
          All fields are required. Please fill in the form and submit again.
        </p>
      )}
    </form>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
