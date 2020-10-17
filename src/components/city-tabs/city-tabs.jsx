import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const CityTabs = (props) => {
  const {cityNames, currentCityOrder} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((it, i) => (
            <li key={`city-${i}`} className="locations__item">
              <a className={`locations__item-link tabs__item${
                i === currentCityOrder && ` tabs__item--active`}`} href="#">
                <span>{it}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CityTabs.propTypes = {
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCityOrder: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cityNames: state.cityNames,
  currentCityOrder: state.currentCityOrder,
});

export {CityTabs};
export default connect(mapStateToProps)(CityTabs);
