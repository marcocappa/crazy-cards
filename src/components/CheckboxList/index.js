import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import './checkbox-list.scss';

const CheckboxList = ({ name, items, onSelect }) => {
  if (items.length === 0) return null;
  return (
    <ul className="crazy-card-checkbox-list">
      {items.map((item) => (
        <li
          key={`list-item-${item.value}`}
          className="crazy-card-checkbox-list__item"
          aria-label="List item"
        >
          <Checkbox
            onChange={onSelect}
            className="crazy-card-checkbox-list__checkbox"
            name={name}
            value={item.value}
            isDisabled={item.isDisabled}
            label={item.label}
            isChecked={item.checked || false}
          />
        </li>
      ))}
    </ul>
  );
};

CheckboxList.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      isDisabled: PropTypes.bool,
      label: PropTypes.string,
      checked: PropTypes.bool,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

CheckboxList.defaultProps = {
  items: [],
};

export default CheckboxList;
