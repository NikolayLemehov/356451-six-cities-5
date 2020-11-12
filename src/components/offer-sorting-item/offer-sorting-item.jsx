import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setSortedType} from "../../store/action";

const OfferSortingItem = (props) => {
  const {type, onCloseMenu, currentSortType, onChangeSortedType} = props;

  return (
    <li className={`places__option${
      currentSortType === type ? ` places__option--active` : ``}`} tabIndex="0"
    onClick={() => {
      onChangeSortedType(type);
      onCloseMenu();
    }}
    >{type}</li>
  );
};

OfferSortingItem.propTypes = {
  type: PropTypes.string.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onChangeSortedType: PropTypes.func.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

const mapStateToProps = ({COMMON}) => ({
  currentSortType: COMMON.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortedType(sortedType) {
    dispatch(setSortedType(sortedType));
  },
});

export {OfferSortingItem};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSortingItem);
