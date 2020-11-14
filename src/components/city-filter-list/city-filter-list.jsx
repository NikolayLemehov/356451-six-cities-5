import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeCityFilter} from "../../store/action";
import {getCities, getCurrentCityName} from "../../store/selectors";

const CityFilterList = (props) => {
  const {cities, currentCityName, onChangeCityFilter} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <li key={`city-${i}`} className="locations__item">
              <a className={`locations__item-link tabs__item${
                it === currentCityName ? ` tabs__item--active` : ``}`} href="#"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeCityFilter(it);
              }}
              >
                <span>{it}</span>
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
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCityFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCityName: getCurrentCityName(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCityFilter(cityName) {
    dispatch(changeCityFilter(cityName));
  },
});

export {CityFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(CityFilterList);
