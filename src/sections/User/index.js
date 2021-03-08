import React, { useState, useEffect } from 'react';
import card from '../../images/card.png';
import UserForm from '../../components/UserForm';
import Link from '../../components/Link';
import Footer from '../../components/Footer';
import CardUser from '../../components/CardUser';
import CardList from '../../components/CardList';
import { cards as mockCards } from '../../mockData/cardsData';

const User = () => {
  const [user, setUser] = useState({});
  const [cardsAvailable, setCardsAvailable] = useState([]);
  const [allCards, setAllCards] = useState([]);

  const handleOnSubmit = (userData) => {
    setUser({ ...userData });
  };

  useEffect(() => {
    setAllCards([...mockCards]);
  }, []);

  useEffect(() => {
    const filteredCards = allCards.filter(
      (card) =>
        card.id === 'anywhere' ||
        (!('employmentStatus' in user) && card.id === 'student') ||
        (user.employmentStatus === 'Student' && card.id === 'student') ||
        (user.annualIncome > 16000 && card.id === 'liquid')
    );

    setCardsAvailable([...filteredCards]);
  }, [user]);

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

                <h2 className="crazy-card-app__subheading">
                  {user.title} {user.firstname} {user.lastname}, based on your
                  details:
                </h2>
                <CardUser {...user} />
              </section>
              <section className="crazy-card-app__section">
                <h3 className="crazy-card-app__section-title">
                  You are elegible for:
                </h3>

                <CardList items={cardsAvailable} />
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
