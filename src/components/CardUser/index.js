import React from 'react';
import PropTypes from 'prop-types';

const CardUser = ({
  title,
  firstname,
  lastname,
  dateOfBirth,
  employmentStatus,
  annualIncome,
  houseNumber,
  postcode,
}) => (
  <div className="cray-card-user">
    <p className="cray-card-user__name">
      {title} {firstname} {lastname}
    </p>
    <p> {dateOfBirth} </p>
    <div className="cray-card-user__details">
      <div>
        <p>{employmentStatus}</p>
        <p>Annual income: {annualIncome}</p>
      </div>
      <div>
        <p>House number: {houseNumber}</p>
        <p>Postcode: {postcode}</p>
      </div>
    </div>
  </div>
);

CardUser.propTypes = {
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  employmentStatus: PropTypes.string.isRequired,
  annualIncome: PropTypes.number.isRequired,
  houseNumber: PropTypes.number.isRequired,
  postcode: PropTypes.string.isRequired,
};

export default CardUser;
