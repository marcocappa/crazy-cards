import React from 'react';
import card from '../../images/card.png';
import CardList from '../../components/CardList';
import Link from '../../components/Link';

const User = () => (
  <div className="crazy-card-app">
    <section className="crazy-card-app__hero">
      <h1 className="crazy-card-app__heading">
        <img src={card} className="crazy-card-app__heading-icon" />
        Find the right credit card for you
      </h1>

      <h2 className="crazy-card-app__subheading">
        Fill out the form to check the right credit card for you.
      </h2>
    </section>
    <section className="crazy-card-app__cards"></section>

    <Link to="/">Go back to home</Link>
  </div>
);

export default User;
