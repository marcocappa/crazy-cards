import React from 'react';
import './card-list.scss';

const CardList = ({ items }) => (
  <ul className="crazy-card-cards-list">
    {items.map(({ id, name, apr, btod, pod, creditAvailable }) => (
      <li key={id} className="crazy-card-cards-list__item">
        <h3 className="crazy-card-cards-list__name">{name}</h3>
        <p>Representative % APR (variable): {apr}%</p>
        <p>Balance Transfer offer duration: {btod} months</p>
        <p>0% Purchase offer duration: {pod} months</p>
        <p>Credit Available: £{creditAvailable}</p>
      </li>
    ))}
  </ul>
);

export default CardList;
