import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getCardIcon } from './utility';
import './card-item.scss';

const CardItem = ({ className, id, name, apr, btod, pod, creditAvailable }) => (
  <li className={`card-detail ${classnames(className)}`}>
    <h3 className="card-detail__name">
      {getCardIcon(id)}
      {name}
    </h3>
    <p className="card-detail__info card-detail__info--apr">
      Representative % APR (variable): <span>{apr}%</span>
    </p>
    <p className="card-detail__info card-detail__info--balance">
      Balance Transfer offer duration: <span>{btod} months</span>
    </p>
    <p className="card-detail__info card-detail__info--purchase">
      Purchase offer duration: <span>{pod} months</span>
    </p>
    <p className="card-detail__info card-detail__info--credit">
      Credit Available: <span>£{creditAvailable}</span>
    </p>
  </li>
);

CardItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  apr: PropTypes.number.isRequired,
  btod: PropTypes.number.isRequired,
  pod: PropTypes.number.isRequired,
  creditAvailable: PropTypes.number.isRequired,
};

CardItem.defaultProps = {
  className: '',
};

export default CardItem;
