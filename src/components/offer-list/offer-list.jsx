import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";

const OfferList = (props) => {
  const {offers, currentCardType} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          currentCardType={currentCardType}
          offerBookmarkStatus={offer.isBookmark}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  currentCardType: PropTypes.string.isRequired,
};

export default OfferList;
