import React, { useState, useEffect } from 'react';
import card from '../../images/card.png';
import UserForm from '../../components/UserForm';
import Link from '../../components/Link';
import Footer from '../../components/Footer';
import CardUser from '../../components/CardUser';
import CardList from '../../components/CardList';
import CheckboxList from '../../components/CheckboxList';
import { cards as mockCards } from '../../mockData/cardsData';
import {
  getFilteredCards,
  getCheckboxList,
  getCardListSelected,
  getTotalCredit,
} from './utility';

const User = () => {
  const [user, setUser] = useState({});
  const [selectedCardsAvailable, setSelectedCardsAvailable] = useState([]);
  const [cardsAvailable, setCardsAvailable] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleOnSubmit = (userData) => {
    setUser({ ...userData });
  };

  useEffect(() => {
    setAllCards([...mockCards]);
  }, []);

  useEffect(() => {
    const filteredCards = getFilteredCards(allCards, user);
    const itemsList = getCheckboxList(filteredCards);
    setCardsAvailable([...itemsList]);
  }, [user]);

  useEffect(() => {
    const filteredCards = getFilteredCards(allCards, user);
    const cardsList = getCardListSelected(filteredCards, selectedIds);
    const totalCreditAvailable = getTotalCredit(cardsList);
    setSelectedCardsAvailable(cardsList);
    setTotalCredit(totalCreditAvailable);
  }, [selectedIds]);

  const handleSelect = (id) => {
    let newSelected = [...selectedIds];
    if (selectedIds.includes(id)) {
      newSelected = selectedIds.filter((selectedId) => selectedId !== id);
    } else {
      newSelected = [...selectedIds, id];
    }
    setSelectedIds([...newSelected]);
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

                <h2 className="crazy-card-app__subheading">
                  Based on your details:
                </h2>
                <CardUser {...user} />
              </section>
              <section className="crazy-card-app__section">
                <h3 className="crazy-card-app__section-title">
                  You are elegible for:
                </h3>

                <CheckboxList
                  items={cardsAvailable}
                  name="cards"
                  onSelect={handleSelect}
                />
              </section>
              <section className="crazy-card-app__section">
                {selectedIds.length > 0 && (
                  <>
                    <h3 className="crazy-card-app__section-title">
                      The total amount of credit available is:{' '}
                      <span className="crazy-card-app__total-credit">
                        {totalCredit}
                      </span>
                    </h3>
                    <CardList items={selectedCardsAvailable} />
                  </>
                )}
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
