import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {OfferCardType} from "../../const";

const OfferCard = (props) => {
  const {offer, onMouseOverOffer, currentOffer, currentCardType} = props;
  const isFavoriteType = currentCardType === OfferCardType.FAVORITE;
  const getClass = (classMain, classNear, classFavorite) => {
    switch (currentCardType) {
      case OfferCardType.MAIN:
        return classMain;
      case OfferCardType.NEAR:
        return classNear;
      case OfferCardType.FAVORITE:
        return classFavorite;
      default:
        return false;
    }
  };

  return (
    <article className={`
    ${getClass(`cities__place-card`, `near-places__card`, `favorites__card`)}
     place-card`}
    onMouseOver={(evt) => {
      evt.preventDefault();
      if (currentOffer !== offer) {
        onMouseOverOffer(offer);
      }
    }}>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : false}
      <div className={`
       ${getClass(
        `cities__image-wrapper`,
        `near-places__image-wrapper`,
        `favorites__image-wrapper`)}
       place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image"
            src={`img/${isFavoriteType ? offer.smallImg : offer.img[0]}`}
            width={isFavoriteType ? `150` : `260`}
            height={isFavoriteType ? `110` : `200`}
            alt="Place image"/>
        </a>
      </div>
      <div className={`${getClass(``, ``, `favorites__card-info`)}place-card__info`}>
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
            <span className="visually-hidden">{offer.isBookMark ? `In` : `To`} bookmarks</span>
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

OfferCard.defaultProps = {
  onMouseOverOffer: () => {},
};

OfferCard.propTypes = {
  offer: offerPropType,
  currentOffer: offerPropType,
  onMouseOverOffer: PropTypes.func.isRequired,
  currentCardType: PropTypes.string.isRequired,
};

export default OfferCard;
