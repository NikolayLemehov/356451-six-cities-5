import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moment from "moment";
import {offerPropType} from "../../prop-types";
import {OfferCardType, RATING_COEFFICIENT} from "../../const";
import OfferCard from "../offer-card/offer-card";
import CommentForm from "../comment-form/comment-form";
import Map from "../map/map";

const MAX_VISIBLE_PHOTO = 6;

const Offer = (props) => {
  const {offer, nearOffers} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src={`img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.img.slice(0, MAX_VISIBLE_PHOTO).map((it) => (
                <div key={it} className="property__image-wrapper">
                  <img className="property__image" src={`img/${it}`} alt="Photo studio"/>
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
                <button className={`property__bookmark-button ${
                  offer.isBookMark ? `property__bookmark-button--active ` : ``}button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{offer.isBookMark ? `In` : `To`} bookmarks</span>
                </button>
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
                  <div className={`property__avatar-wrapper
                   ${offer.hostTop ? ` property__avatar-wrapper--pro` : false} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={`img/${offer.avatar}`} width="74" height="74"
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
                <ul className="reviews__list">
                  {offer.reviews.map((it, i) => (
                    <li key={`${i}-${it}`} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={`img/${it.avatar}`} width="54" height="54"
                            alt="Reviews avatar"/>
                        </div>
                        <span className="reviews__user-name">
                          {it.reviewer}
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
                          {it.message}
                        </p>
                        <time className="reviews__time" dateTime={it.date}>
                          {moment(it.date, `YYYY-MM-DD`).format(`MMMM YYYY`)}
                        </time>
                      </div>
                    </li>
                  ))}
                </ul>
                <CommentForm/>
              </section>
            </div>
          </div>

          <section className="property__map map">
            <Map
              offers={nearOffers}
              city={offer.city}
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
  offer: offerPropType.isRequired,
  nearOffers: PropTypes.arrayOf(offerPropType).isRequired,
};

export default Offer;
