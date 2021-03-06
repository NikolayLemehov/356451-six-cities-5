import React, {Fragment} from "react";
import PropTypes from "prop-types";

const MainEmpty = (props) => {
  const {currentCityName} = props;

  return (
    <Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment
            in {currentCityName}</p>
        </div>
      </section>
      <div className="cities__right-section"/>
    </Fragment>
  );
};

MainEmpty.propTypes = {
  currentCityName: PropTypes.string.isRequired,
};

export default MainEmpty;
