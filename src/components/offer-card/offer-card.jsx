import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offerPropType} from "../../prop-types";
import {OfferCardType, RATING_COEFFICIENT} from "../../const";
import {connect} from "react-redux";
import {setOverOfferId} from "../../store/action";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import OfferCardBookmark from "../offer-card-bookmark/offer-card-bookmark";

const OfferCard = (props) => {
  const {offer, currentCardType, overOfferId, onChangeOfferId} = props;
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

  const onSetNewId = () => {
    if (offer.id !== overOfferId) {
      onChangeOfferId(offer.id);
    }
  };

  return (
    <article className={`
    ${getClass(`cities__place-card`, `near-places__card`, `favorites__card`)}
     place-card`}
    onMouseEnter={currentCardType === OfferCardType.MAIN ? () => {
      onSetNewId();
    } : undefined}
    onMouseLeave={currentCardType === OfferCardType.MAIN ? () => {
      onChangeOfferId(``);
    } : undefined}>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : false}
      <div className={`
       ${getClass(
        `cities__image-wrapper`,
        `near-places__image-wrapper`,
        `favorites__image-wrapper`)}
       place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`} className={`place-card__img-link`}
          onClick={currentCardType !== OfferCardType.MAIN ? onSetNewId : undefined}
        >
          <img className="place-card__image"
            src={offer.smallImg}
            width={isFavoriteType ? `150` : `260`}
            height={isFavoriteType ? `110` : `200`}
            alt="Place image"/>
        </Link>
      </div>
      <div className={`${getClass(``, ``, `favorites__card-info `)}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferCardBookmark
            offerId={offer.id}
            offerBookmarkStatus={offer.isBookmark}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * RATING_COEFFICIENT}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}
            onClick={currentCardType !== OfferCardType.MAIN ? onSetNewId : undefined}
          >{offer.id} {offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  onMouseOverOffer: () => {
  },
};

OfferCard.propTypes = {
  offer: offerPropType,
  changedBookmarkOffer: offerPropType,
  currentCardType: PropTypes.string.isRequired,
  overOfferId: PropTypes.string.isRequired,
  onMouseOverOffer: PropTypes.func.isRequired,
  onChangeOfferId: PropTypes.func.isRequired,
  onChangeBookmarkOffers: PropTypes.func.isRequired,
  onChangeBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = ({COMMON}) => ({
  overOfferId: COMMON.overOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeOfferId(offerId) {
    dispatch(setOverOfferId(offerId));
  },
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
  },
  onChangeBookmarkOffers() {
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
