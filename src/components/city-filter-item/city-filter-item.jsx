import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCurrentCityName} from "../../store/selectors";
import {changeCityFilter} from "../../store/action";

const CityFilterItem = (props) => {
  const {city, currentCityName, onChangeCityFilter} = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${
        city === currentCityName ? ` tabs__item--active` : ``}`} href="#"
      onClick={(evt) => {
        evt.preventDefault();
        onChangeCityFilter(city);
      }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

CityFilterItem.propTypes = {
  city: PropTypes.string.isRequired,
  currentCityName: PropTypes.string.isRequired,
  onChangeCityFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCityName: getCurrentCityName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCityFilter(cityName) {
    dispatch(changeCityFilter(cityName));
  },
});

export {CityFilterItem};
export default connect(mapStateToProps, mapDispatchToProps)(CityFilterItem);
