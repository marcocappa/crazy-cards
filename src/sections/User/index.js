import React, { useState } from 'react';
import card from '../../images/card.png';
import UserForm from '../../components/UserForm';
import Link from '../../components/Link';
import Footer from '../../components/Footer';
import CardUser from '../../components/CardUser';

const User = () => {
  const [user, setUser] = useState({});

  const handleOnSubmit = (userData) => {
    setUser(userData);
  };
  return (
    <div>
      <div className="crazy-card-app">
        {Object.keys(user).length === 0 && (
          <>
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
              <UserForm onSubmit={(user) => handleOnSubmit(user)} />
            </section>
          </>
        )}

        {Object.keys(user).length > 0 && (
          <div>
            <>
              <section className="crazy-card-app__hero">
                <h1 className="crazy-card-app__heading">
                  <img src={card} className="crazy-card-app__heading-icon" />
                  Available Cards
                </h1>
              </section>
              <section className="crazy-card-app__section">
                <CardUser {...user} dateOfBirth="19/01/1985" />
              </section>
            </>
          </div>
        )}

        <section className="crazy-card-app__nav">
          <Link to="/">Go back to home</Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default User;
