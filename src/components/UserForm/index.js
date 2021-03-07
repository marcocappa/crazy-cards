import React, { useState } from 'react';
import './user-form.scss';

const UserForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [title, setTitle] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(firstname);
    console.log(lastname);
    console.log(title);
    console.log(employmentStatus);
    console.log(annualIncome);
    console.log(houseNumber);
    console.log(postcode);

    console.log('Submitting Name');
  };

  return (
    <form onSubmit={handleSubmit} className="crazy-card-user-form">
      <label>
        <span>First Name:</span>
        <input
          name="firstname"
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>

      <label>
        <span>Last Name:</span>
        <input
          name="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>

      <label>
        <span>Title:</span>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        <span></span>Data of birth:
      </label>
      <label>
        <span>Employment Status:</span>
        <input
          name="employmentStatus"
          type="text"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
        />
      </label>

      <label>
        <span>Annual Income:</span>
        <input
          name="annualIncome"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
        />
      </label>

      <label>
        <span>House Number:</span>
        <input
          name="houseNumber"
          type="number"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
      </label>

      <label>
        <span>Postcode:</span>
        <input
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
    </form>
  );
};

// 1     firstname: 'Ollie',
// 2    lastname: 'Murphree',
// 3 title: 'Mr.',
// 4    dataOfBirth: '01/07/1970',
// 5   employmentStatus: 'Full time',
// 6  annualIncome: 34000,
// 7  houseNumber: 700,
// 8  postcode: 'BS14 9PR',

export default UserForm;
