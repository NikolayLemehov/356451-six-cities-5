import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import CityFilterList from "../city-filter-list/city-filter-list";
import OfferSorting from "../offer-sorting/offer-sorting";
import {offerPropType} from "../../prop-types";
import {AppRoute, OfferCardType} from "../../const";
import withOpening from "../../hocs/with-opening/with-opening";
import MainEmpty from "../main-empty/main-empty";
import Header from "../header/header";
import {
  getCurrentCityName,
  getCurrentCityOffers,
  getCurrentSortedCityOffers
} from "../../store/selectors";

const OfferSortingWrapper = withOpening(OfferSorting);

const Main = (props) => {
  const {currentSortedCityOffers, currentCityOffers, currentCityName} = props;
  const haveCityOffer = currentCityOffers.length > 0;

  return (
    <div className={`page page--gray page--main ${!haveCityOffer ? `page__main--index-empty` : ``}`}>
      <Header
        appRoute={AppRoute.MAIN}
      />

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
};

const mapStateToProps = (state) => ({
  currentCityName: getCurrentCityName(state),
  currentCityOffers: getCurrentCityOffers(state),
  currentSortedCityOffers: getCurrentSortedCityOffers(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
