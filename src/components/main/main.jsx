import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import CityFilterList from "../city-filter-list/city-filter-list";
import OfferSorting from "../offer-sorting/offer-sorting";
import {offerPropType} from "../../prop-types";
import {OfferCardType} from "../../const";
import withOpening from "../../hocs/withOpening/withOpening";

const OfferSortingWrapper = withOpening(OfferSorting);

const Main = (props) => {
  const {currentSortedCityOffers, currentCityOffers, currentCityName} = props;

  return (
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityFilterList/>
        <div className="cities">
          <div className="cities__places-container container">
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
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  currentSortedCityOffers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCityOffers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCityName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCityName: state.currentCityName,
  currentSortedCityOffers: state.currentSortedCityOffers,
  currentCityOffers: state.currentCityOffers,
});

export {Main};
export default connect(mapStateToProps)(Main);
