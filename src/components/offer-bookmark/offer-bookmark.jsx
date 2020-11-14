import React from "react";
import {fetchBookmarkOffers, updateOfferBookmarkStatus} from "../../store/api-actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getIsAuthorizedStatus} from "../../store/selectors";
import {AppRoute} from "../../const";
import OfferBookmarkContent from "../offer-bookmark-content/offer-bookmark-content";

const OfferBookmark = (props) => {
  const {offerId, offerBookmarkStatus, onChangeBookmark, isAuthorizedStatus} = props;

  const handleBookmarkClick = (evt) => {
    evt.preventDefault();
    onChangeBookmark(offerId, !offerBookmarkStatus);
  };

  return isAuthorizedStatus ? (
    <button className={`property__bookmark-button ${
      offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
    type="button"
    onClick={handleBookmarkClick}
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
      />
    </button>
  ) : (
    <Link to={AppRoute.LOGIN} className={`property__bookmark-button ${
      offerBookmarkStatus ? ` property__bookmark-button--active ` : ``}button`}
    type="button"
    >
      <OfferBookmarkContent
        offerBookmarkStatus={offerBookmarkStatus}
      />
    </Link>
  );
};

OfferBookmark.propTypes = {
  offerId: PropTypes.string.isRequired,
  offerBookmarkStatus: PropTypes.bool.isRequired,
  onChangeBookmark: PropTypes.func.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeBookmark(offerId, bookmarkStatus) {
    dispatch(updateOfferBookmarkStatus(offerId, bookmarkStatus));
    dispatch(fetchBookmarkOffers());
  },
});

export {OfferBookmark};
export default connect(mapStateToProps, mapDispatchToProps)(OfferBookmark);
