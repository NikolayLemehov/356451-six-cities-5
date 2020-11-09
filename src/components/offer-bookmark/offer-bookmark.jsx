import React from "react";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {connect} from "react-redux";
import {offerPropType} from "../../prop-types";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../store/selectors";
import {AppRoute, AuthorizationStatus} from "../../const";

const OfferBookmark = (props) => {
  const {offerId, offerBookmarkStatus, onChangeBookmark, authorizationStatus} = props;

  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

  switch (authorizationStatus) {
    case AuthorizationStatus.AUTH:
      return (
        <button className={`property__bookmark-button ${
          offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
        type="button"
        onClick={handleBookmarkClick}
        >
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
        </button>
      );
    case AuthorizationStatus.NO_AUTH:
      return (
        <Link to={AppRoute.LOGIN} className={`property__bookmark-button ${
          offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
        type="button"
        >
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
        </Link>
      );
  }

  return (
    <button className={`property__bookmark-button ${
      offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
    type="button"
    onClick={handleBookmarkClick}
    >
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
    </button>
  );
};

OfferBookmark.propTypes = {
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

export {OfferBookmark};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmark);
