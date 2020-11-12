import React from "react";
import PropTypes from "prop-types";
import {sortTypes} from "../../const";
import OfferSortingItem from "../offer-sorting-item/offer-sorting-item";

const OfferSorting = (props) => {
  const {isOpened, onCloseMenu, onToggleMenu} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={() => {
          onToggleMenu(isOpened);
        }}
      >
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}>
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
  isOpened: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
};

export default OfferSorting;
