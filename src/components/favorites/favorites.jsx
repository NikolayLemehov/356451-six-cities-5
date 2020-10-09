import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";
import {OfferCardType} from "../../const";

const Favorites = (props) => {
  const {bookMarkOffers} = props;
  const bookMarkOffersCityMap = new Map();
  bookMarkOffers.forEach((it) => {
    if (!Array.from(bookMarkOffersCityMap.keys()).some((city) => city === it.city)) {
      bookMarkOffersCityMap.set(it.city, [it]);
    } else {
      bookMarkOffersCityMap.set(it.city, [...(bookMarkOffersCityMap.get(it.city)), it]);
    }
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src={`img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(bookMarkOffersCityMap.keys()).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {Array.from(bookMarkOffersCityMap.get(city)).map((offer) => (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        currentCardType={OfferCardType.FAVORITE}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href={`main.html`}>
          <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  bookMarkOffers: PropTypes.arrayOf(offerPropType).isRequired,
};


export default Favorites;
