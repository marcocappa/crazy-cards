import React from 'react';
import CardItem from '../CardItem';
import './card-list.scss';

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
