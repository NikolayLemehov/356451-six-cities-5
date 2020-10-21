import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const OfferSortingItem = (props) => {
  const {type, currentSortType, onChangeSortedType, onChangeSortedCityOffers} = props;

  return (
    <li className={`places__option ${currentSortType === type && `places__option--active`}`} tabIndex="0"
      onClick={() => {
        onChangeSortedType(type);
        onChangeSortedCityOffers();
      }}
    >{type}</li>
  );
};

OfferSortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onChangeSortedType: PropTypes.func.isRequired,
  onChangeSortedCityOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortedType(sortedType) {
    dispatch(ActionCreator.getSortedType(sortedType));
  },
  onChangeSortedCityOffers() {
    dispatch(ActionCreator.getSortedCityOffers());
  },
});

export {OfferSortingItem};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSortingItem);
