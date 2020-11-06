import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import CityFilterList from "../city-filter-list/city-filter-list";
import OfferSorting from "../offer-sorting/offer-sorting";
import {offerPropType} from "../../prop-types";
import {AppRoute, AuthorizationStatus, OfferCardType} from "../../const";
import withOpening from "../../hocs/withOpening/withOpening";
import MainEmpty from "../main-empty/main-empty";
import {getCurrentCityOffers, getCurrentSortedCityOffers} from "../../store/selectors";

const OfferSortingWrapper = withOpening(OfferSorting);

const Main = (props) => {
  const {currentSortedCityOffers, currentCityOffers, currentCityName, userEMail, authorizationStatus, userAvatar} = props;
  const haveCityOffer = currentCityOffers.length > 0;
  const isAuthorizedStatus = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <div className={`page page--gray page--main ${!haveCityOffer ? `page__main--index-empty` : ``}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src={`/img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile"
                    to={isAuthorizedStatus ? AppRoute.FAVORITES : AppRoute.LOGIN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"
                      style={isAuthorizedStatus ? {backgroundImage: `url(${userAvatar})`} : undefined}
                    >
                    </div>
                    <span className="header__user-name user__name"
                    >{isAuthorizedStatus ? userEMail : `Sign in`}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityFilterList/>
        <div className="cities">
          <div className={`cities__places-container container ${!haveCityOffer ? `cities__places-container--empty` : ``}`}>
            {haveCityOffer ? (
              <Fragment>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentSortedCityOffers.length} offers to stay in {currentCityName}</b>
                  <OfferSortingWrapper/>
                  <OfferList
                    offers={currentSortedCityOffers}
                    currentCardType={OfferCardType.MAIN}
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      city={currentCityName}
                      offers={currentCityOffers}
                    />
                  </section>
                </div>
              </Fragment>
            )
              : <MainEmpty
                currentCityName={currentCityName}
              />}
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  currentCityOffers: PropTypes.arrayOf(offerPropType).isRequired,
  currentSortedCityOffers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCityName: PropTypes.string.isRequired,
  userEMail: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const {COMMON, USER} = state;
  return ({
    currentCityName: COMMON.currentCityName,
    currentCityOffers: getCurrentCityOffers(state),
    currentSortedCityOffers: getCurrentSortedCityOffers(state),
    userEMail: USER.authorizationStatus === AuthorizationStatus.AUTH ? COMMON.authInfo.email : ``,
    userAvatar: USER.authorizationStatus === AuthorizationStatus.AUTH ? COMMON.authInfo.avatarUrl : ``,
    authorizationStatus: USER.authorizationStatus,
  });
};

export {Main};
export default connect(mapStateToProps)(Main);
