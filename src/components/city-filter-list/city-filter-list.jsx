import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCities} from "../../store/selectors";
import CityFilterItem from "../city-filter-item/city-filter-item";

const CityFilterList = (props) => {
  const {cities} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((it, i) => (
            <CityFilterItem
              key={`city-${i}`}
              city={it}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

CityFilterList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

export {CityFilterList};
export default connect(mapStateToProps)(CityFilterList);
