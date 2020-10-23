import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {sortTypes} from "../../const";
import OfferSortingItem from "../offer-sorting-item/offer-sorting-item";

class OfferSorting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClose() {
    this.setState({isOpened: false});
  }

  render() {
    const {isOpened} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this.setState({
              isOpened: !isOpened,
            });
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
              onCloseMenu={this.handleMenuClose}
            />
          ))}
        </ul>
      </form>
    );
  }
}

OfferSorting.propTypes = {
  currentCityOffers: PropTypes.arrayOf(offerPropType).isRequired,
};

export default OfferSorting;
