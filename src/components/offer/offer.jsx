import React, {useEffect} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {offerPropType, reviewPropType} from "../../prop-types";
import {AppRoute, OfferCardType, RATING_COEFFICIENT} from "../../const";
import OfferCard from "../offer-card/offer-card";
import CommentForm from "../comment-form/comment-form";
import Map from "../map/map";
import {connect} from "react-redux";
import {
  getChangedBookmarkOffer, getIsAuthorizedStatus,
  getNearOffers,
  getReviews, getSortedReviews
} from "../../store/selectors";
import {
  fetchBookmarkOffers,
  fetchIdOffer,
  fetchNearOffers,
  fetchReviews,
  updateOfferBookmarkStatus
} from "../../store/api-actions";
import OfferBookmark from "../offer-bookmark/offer-bookmark";
import Header from "../header/header";

const MAX_VISIBLE_PHOTO = 6;

const Offer = (props) => {
  const {offer, offerId, loadOfferAction, loadNearOffersAction, loadReviewsAction, nearOffers, offerBookmarkStatus, reviews, visibleReviews, isAuthorizedStatus} = props;
  useEffect(() => {
    loadOfferAction(offerId);
    loadNearOffersAction(offerId);
    loadReviewsAction(offerId);
  }, [offerId]);

  return !offer.id ? (
    <div>Идёт загрузка...</div>
  ) : (
    <div className="page">
      <Header
        appRoute={AppRoute.OFFER}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.img.slice(0, MAX_VISIBLE_PHOTO).map((it) => (
                <div key={it} className="property__image-wrapper">
                  <img className="property__image" src={`${it}`} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : false}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <OfferBookmark
                  offerId={offer.id}
                  offerBookmarkStatus={offerBookmarkStatus}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * RATING_COEFFICIENT}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {(offer.rating).toFixed(1)}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroom} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.visitor} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.option.map((it, i) => (
                    <li key={`${i}-${it}`} className="property__inside-item">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper${
                    offer.hostTop ? ` property__avatar-wrapper--pro ` : ` `}user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`${offer.avatar}`} width="74" height="74"
                      alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host}
                  </span>
                </div>
                <div className="property__description">
                  {offer.description.map((it, i) => (
                    <p key={`${i}-${it}`} className="property__text">{it}</p>
                  ))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {visibleReviews.map((it, i) => (
                    <li key={`${i}-${it}`} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={`${it.user.avatarUrl}`} width="54" height="54"
                            alt="Reviews avatar"/>
                        </div>
                        <span className="reviews__user-name">
                          {it.user.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `${it.rate * RATING_COEFFICIENT}%`}}/>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {it.comment}
                        </p>
                        <time className="reviews__time" dateTime={it.date}>
                          {moment(it.date, `YYYY-MM-DD`).format(`MMMM YYYY`)}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
                {isAuthorizedStatus && <CommentForm
                  offerId={offer.id}
                />}
              </section>
            </div>
          </div>

          <section className="property__map map">
            <Map
              city={offer.city}
              offers={[offer, ...nearOffers]}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((it) => (
                <OfferCard
                  key={it.id}
                  offer={it}
                  currentCardType={OfferCardType.NEAR}
                  offerBookmarkStatus={it.isBookmark}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.any.isRequired,
  offerBookmarkStatus: PropTypes.any,
  nearOffers: PropTypes.arrayOf(offerPropType).isRequired,
  offerId: PropTypes.string.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
  visibleReviews: PropTypes.arrayOf(reviewPropType).isRequired,
  loadOfferAction: PropTypes.func.isRequired,
  loadNearOffersAction: PropTypes.func.isRequired,
  loadReviewsAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getChangedBookmarkOffer(state),
  reviews: getReviews(state),
  visibleReviews: getSortedReviews(state),
  offerBookmarkStatus: getChangedBookmarkOffer(state).isBookmark,
  nearOffers: getNearOffers(state),
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferAction(offerId) {
    dispatch(fetchIdOffer(offerId));
  },
  loadNearOffersAction(offerId) {
    dispatch(fetchNearOffers(offerId));
  },
  loadReviewsAction(offerId) {
    dispatch(fetchReviews(offerId));
  },
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
  },
  onChangeBookmarkOffers() {
    dispatch(fetchBookmarkOffers());
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
