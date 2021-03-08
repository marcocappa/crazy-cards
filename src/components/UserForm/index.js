import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
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

const UserForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !title ||
      !dateOfBirth ||
      !employmentStatus ||
      !annualIncome ||
      !houseNumber ||
      !postcode
    ) {
      setError(true);
      return;
    }

    setError(false);

    onSubmit({
      firstname,
      lastname,
      title,
      employmentStatus,
      dateOfBirth,
      annualIncome: Number(annualIncome),
      houseNumber: Number(houseNumber),
      postcode,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="crazy-card-user-form">
      <label>
        <span>Title:</span>
        <Select
          options={titleOptions}
          onChange={(option) => {
            setTitle(option.value);
          }}
        />
      </label>

      <label>
        <span>Firstname:</span>
        <input
          className="crazy-card-user-form__input"
          name="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>

      <label>
        <span>Lastname:</span>
        <input
          className="crazy-card-user-form__input"
          name="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>

      <label>
        <span>Data of birth:</span>
        <DatePicker
          selected={dateOfBirth}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDateOfBirth(date)}
          maxDate={new Date()}
          className="crazy-card-user-form__input"
          placeholderText="dd/MM/yyyy"
        />
      </label>

      <label>
        <span>Employment Status:</span>
        <Select
          options={employmentStatusOptions}
          onChange={(option) => {
            setEmploymentStatus(option.value);
          }}
        />
      </label>

      <label>
        <span>Annual Income:</span>
        <input
          className="crazy-card-user-form__input"
          name="annualIncome"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </label>

      <label>
        <span>House Number:</span>
        <input
          className="crazy-card-user-form__input"
          name="houseNumber"
          type="number"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
      </label>

      <label>
        <span>Postcode:</span>
        <input
          className="crazy-card-user-form__input"
          name="postcode"
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </label>

      <div className="crazy-card-user-form__actions">
        <button
          className="crazy-card-user-form__submit"
          type="button"
          onClick={(e) => handleSubmit(e)}
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

export default UserForm;
