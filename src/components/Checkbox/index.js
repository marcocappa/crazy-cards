import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Checkbox = ({
  className,
  name,
  value,
  isDisabled,
  label,
  isChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <>
      <input
        onChange={() => {
          onChange(value);
        }}
        type="checkbox"
        defaultChecked={checked}
        name={`${name}[]`}
        className={`crazy-card-checkbox ${classnames(className)}`}
        id={value}
        disabled={isDisabled}
      />
      <label
        htmlFor={value}
        onClick={() => (checked ? setChecked(false) : setChecked(true))}
      >
        {label}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
};

Checkbox.defaultProps = {
  className: undefined,
  isDisabled: false,
  isChecked: false,
};

export default Checkbox;
