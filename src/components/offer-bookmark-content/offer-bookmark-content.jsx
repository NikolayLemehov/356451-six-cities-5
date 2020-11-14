import React, {Fragment} from "react";
import PropTypes from "prop-types";

const OfferBookmarkContent = (props) => {
  const {offerBookmarkStatus} = props;

  return (
    <Fragment>
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{offerBookmarkStatus ? `In` : `To`} bookmarks</span>
    </Fragment>
  );
};

OfferBookmarkContent.propTypes = {
  offerBookmarkStatus: PropTypes.bool.isRequired,
};

export default OfferBookmarkContent;
