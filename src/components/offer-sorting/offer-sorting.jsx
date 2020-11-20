import React, {useState} from "react";
import {sortTypes} from "../../const";
import OfferSortingItem from "../offer-sorting-item/offer-sorting-item";
import PropTypes from "prop-types";
import {getCurrentSortType} from "../../store/selectors";
import {connect} from "react-redux";

const OfferSorting = (props) => {
  const {currentSortType} = props;
  const [isOpened, setIsOpened] = useState(false);
  const onCloseMenu = () => {
    setIsOpened(false);
  };
  const clickMenuHandle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={clickMenuHandle}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpened ? ` places__options--opened` : ``}`}>
        {sortTypes.map((it, i) => (
          <OfferSortingItem
            key={`${it}-${i}`}
            type={it}
            onCloseMenu={onCloseMenu}
          />
        ))}
      </ul>
    </form>
  );
};

OfferSorting.propTypes = {
  currentSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: getCurrentSortType(state),
});

export {OfferSorting};
export default connect(mapStateToProps)(OfferSorting);
