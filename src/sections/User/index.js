import React from 'react';
import card from '../../images/card.png';
import UserForm from '../../components/UserForm';
import Link from '../../components/Link';
import Footer from '../../components/Footer';

const User = () => (
  <div>
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
      <section className="crazy-card-app__section">
        <UserForm />
      </section>

      <section className="crazy-card-app__nav">
        <Link to="/">Go back to home</Link>
      </section>
    </div>
    <Footer />
  </div>
);

export default User;
