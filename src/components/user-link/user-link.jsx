import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getIsAuthorizedStatus} from "../../store/selectors";
import {AppRoute} from "../../const";
import {Link} from "react-router-dom";
import UserLinkContent from "../user-link-content/user-link-content";

const UserLink = (props) => {
  const {appRoute, isAuthorizedStatus} = props;

  const getLink = () => {
    switch (true) {
      case appRoute !== AppRoute.FAVORITES && isAuthorizedStatus:
        return AppRoute.FAVORITES;
      case appRoute !== AppRoute.LOGIN && !isAuthorizedStatus:
        return AppRoute.LOGIN;
      default:
        return false;
    }
  };
  const link = getLink();
  const isActiveLink = appRoute !== AppRoute.FAVORITES && isAuthorizedStatus || appRoute !== AppRoute.LOGIN && !isAuthorizedStatus;

  return isActiveLink ? (
    <Link className="header__nav-link header__nav-link--profile"
      to={link}
    >
      <UserLinkContent/>
    </Link>
  ) : (
    <a className="header__nav-link header__nav-link--profile header__nav-link--inactive">
      <UserLinkContent/>
    </a>
  );
};

UserLink.propTypes = {
  appRoute: PropTypes.string.isRequired,
  isAuthorizedStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizedStatus: getIsAuthorizedStatus(state),
});

export {UserLink};
export default connect(mapStateToProps)(UserLink);
