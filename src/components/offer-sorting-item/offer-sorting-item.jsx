import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setSortedType, setSortedCityOffers} from "../../store/action";

const OfferSortingItem = (props) => {
  const {type, onCloseMenu, currentSortType, onChangeSortedType, onChangeSortedCityOffers} = props;

  return (
    <li className={`places__option ${currentSortType === type && `places__option--active`}`} tabIndex="0"
      onClick={() => {
        onChangeSortedType(type);
        onChangeSortedCityOffers();
        onCloseMenu();
      }}
    >{type}</li>
  );
};

OfferSortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onChangeSortedType: PropTypes.func.isRequired,
  onChangeSortedCityOffers: PropTypes.func.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortedType(sortedType) {
    dispatch(setSortedType(sortedType));
  },
  onChangeSortedCityOffers() {
    dispatch(setSortedCityOffers());
  },
});

export {OfferSortingItem};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSortingItem);
