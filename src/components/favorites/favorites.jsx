import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import OfferCard from "../offer-card/offer-card";
import {AppRoute, AuthorizationStatus, OfferCardType} from "../../const";
import {
  getAuthorizationStatus,
  getBookmarkOffersByCity,
  getUserAvatar,
  getUserEMail
} from "../../store/selectors";

const Favorites = (props) => {
  const {bookmarkOffersByCity, userAvatar, userEMail, authorizationStatus} = props;
  const isAuthorizedStatus = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
                <img className="header__logo" src={`img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={isAuthorizedStatus ? {backgroundImage: `url(${userAvatar})`} : undefined}
                    >
                    </div>
                    <span className="header__user-name user__name"
                    >{isAuthorizedStatus ? userEMail : `Sign in`}</span>
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
              {(Array.from(bookmarkOffersByCity.keys())).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {bookmarkOffersByCity.get(city).map((offer) => (
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
        <Link className="footer__logo-link footer__logo-link--active" to={AppRoute.MAIN}>
          <img className="footer__logo" src={`img/logo.svg`} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  bookmarkOffersByCity: PropTypes.instanceOf(Map).isRequired,
  userEMail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  bookmarkOffersByCity: getBookmarkOffersByCity(state),
  userEMail: getUserEMail(state),
  userAvatar: getUserAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
