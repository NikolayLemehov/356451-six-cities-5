import React from "react";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {connect} from "react-redux";
import {offerPropType} from "../../prop-types";
import PropTypes from "prop-types";

const OfferCardBookmark = (props) => {
  const {offerId, offerBookmarkStatus, onChangeBookmark} = props;

  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

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
};

const mapDispatchToProps = (dispatch) => ({
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferCardBookmark};
export default connect(undefined, mapDispatchToProps)(OfferCardBookmark);
