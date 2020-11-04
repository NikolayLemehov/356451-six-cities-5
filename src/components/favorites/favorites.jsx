import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {offerPropType} from "../../prop-types";
import OfferCard from "../offer-card/offer-card";
import {AppRoute, OfferCardType} from "../../const";

const Favorites = (props) => {
  const {bookmarkOffers} = props;
  const bookmarkOffersByCity = {};
  bookmarkOffers.forEach((it) => {
    bookmarkOffersByCity[it.city] = bookmarkOffersByCity[it.city] ? [...(bookmarkOffersByCity[it.city]), it] : [it];
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.MAIN}>
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
              {(Object.keys(bookmarkOffersByCity)).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {bookmarkOffersByCity[city].map((offer) => (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        currentCardType={OfferCardType.FAVORITE}
                        offerBookmarkStatus={offer.isBookmark}
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
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  bookmarkOffers: PropTypes.arrayOf(offerPropType).isRequired,
};

const mapStateToProps = (state) => ({
  bookmarkOffers: state.bookmarkOffers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
