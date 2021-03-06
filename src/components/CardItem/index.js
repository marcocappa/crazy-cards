import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';
import './card-item.scss';

const CardItem = ({ className, name, apr, btod, pod, creditAvailable }) => (
  <li className={`card-detail ${classnames(className)}`}>
    <h3 className="card-detail__name">{name}</h3>
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
  name: PropType.string.isRequired,
  apr: PropType.number.isRequired,
  btod: PropType.number.isRequired,
  pod: PropType.number.isRequired,
  creditAvailable: PropType.number.isRequired,
};

export default CardItem;
