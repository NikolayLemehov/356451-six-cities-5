import React from "react";
import PropTypes from "prop-types";

const OfferSortingItem = (props) => {
  const {type, isActive} = props;
  return (
    <li className={`places__option ${isActive && `places__option--active`}`} tabIndex="0">{type}</li>
  );
};

OfferSortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default OfferSortingItem;
