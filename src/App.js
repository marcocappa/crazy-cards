import React from 'react';
import card from './images/card.png';
import CardList from './components/CardList';
import { cards } from './mockData/cardsData';
import './app.scss';

const App = () => (
  <div className="crazy-card-app">
    <section className="crazy-card-app__hero">
      <h1 className="crazy-card-app__heading">
        <img src={card} className="crazy-card-app__heading-icon" />
        Welcome to Crazy Cards!
      </h1>

      <h2 className="crazy-card-app__subheading">
        This is a web application that allow customers to enter their details
        and review credit cards that are applicable to their credit status.
      </h2>
    </section>
    <section className="crazy-card-app__cards">
      <h3>Crazy Cards currently has available the following cards:</h3>
      <CardList items={cards} />
    </section>
  </div>
);

export default App;
