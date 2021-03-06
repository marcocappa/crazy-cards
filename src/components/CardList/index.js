import React from 'react';
import './card-list.scss';
import CardItem from '../CardItem';

const CardList = ({ items }) => (
  <ul className="crazy-card-cards-list">
    {items.map((item) => (
      <CardItem
        {...item}
        key={item.id}
        className="crazy-card-cards-list__item"
      />
    ))}
  </ul>
);

export default CardList;
