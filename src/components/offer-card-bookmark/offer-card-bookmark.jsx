import React from "react";
import PropTypes from "prop-types";
import {offerPropType} from "../../prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {getAuthorizationStatus} from "../../store/selectors";
import {AppRoute, AuthorizationStatus} from "../../const";

const OfferCardBookmark = (props) => {
  const {offerId, offerBookmarkStatus, onChangeBookmark, authorizationStatus} = props;
  // console.log(authorizationStatus);

  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

  switch (authorizationStatus) {
    case AuthorizationStatus.AUTH:
      return (
        <button className={`place-card__bookmark-button${
          offerBookmarkStatus ? ` place-card__bookmark-button--active ` : ` `}button`}
        type="button"
        onClick={handleBookmarkClick}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
        </button>
      );
    case AuthorizationStatus.NO_AUTH:
      return (
        <Link to={AppRoute.LOGIN} className={`place-card__bookmark-button
        ${offerBookmarkStatus ? `place-card__bookmark-button--active ` : ` `}button`}
        type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
        </Link>
      );
  }

  return (
    <button className={`place-card__bookmark-button ${
      offerBookmarkStatus ? ` place-card__bookmark-button--active ` : ``}button`}
    type="button"
    onClick={handleBookmarkClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
    </button>
  );
};

OfferCardBookmark.propTypes = {
  offer: offerPropType,
  offerId: PropTypes.string.isRequired,
  offerBookmarkStatus: PropTypes.bool.isRequired,
  onChangeBookmark: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferCardBookmark};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCardBookmark);
