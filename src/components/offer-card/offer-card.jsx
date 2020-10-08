import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";

const OfferCard = (props) => {
  const {offer, onMouseOverOffer, currentOffer} = props;

  return (
    <article className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        if (currentOffer !== offer) {
          onMouseOverOffer(offer);
        }
      }}>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : false}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.img[0]} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${
            offer.isBookMark ? ` place-card__bookmark-button--active` : false
          } button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: offerPropType,
  currentOffer: offerPropType,
  onMouseOverOffer: PropTypes.func.isRequired
};

export default OfferCard;
