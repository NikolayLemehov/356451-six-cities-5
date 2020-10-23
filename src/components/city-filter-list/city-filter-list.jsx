import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CityFilterList = (props) => {
  const {cities, currentCityName, onChangeCityFilter} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <li key={`city-${i}`} className="locations__item">
              <a className={`locations__item-link tabs__item${
                it.name === currentCityName && ` tabs__item--active`}`} href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeCityFilter(it.name);
              }}
              >
                <span>{it.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CityFilterList.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  onChangeCityFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCityName: state.currentCityName,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCityFilter(cityName) {
    dispatch(ActionCreator.changeCityFilter(cityName));
    dispatch(ActionCreator.setCityOffers(cityName));
    dispatch(ActionCreator.setSortedCityOffers());
    // dispatch(ActionCreator.getFirstOfferId());
  },
});

export {CityFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(CityFilterList);
