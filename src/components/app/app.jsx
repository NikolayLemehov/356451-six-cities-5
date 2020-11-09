import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router, Link} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import browserHistory from "../../browser-history";
import {offerPropType} from "../../prop-types";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import {fetchIdOffer} from "../../store/api-actions";
import {getOffers} from "../../store/selectors";

const App = (props) => {
  const {offers} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <Favorites/>
            );
          }}
        />
        <Route exact path={AppRoute.LOGIN}
          render={() => (
            <Login/>
          )}
        />
        <Route path="/offer/:id" exact
          render={({match}) => {
            return (
              <Offer
                // offer={offers.find((it) => it.id === match.params.id)}
                // offer={loadOfferAction(match.params.id)}
                nearOffers={offers.slice(0, 3)}
                offerId={match.params.id}
              />
            );
          }}
        />
        <Route
          render={() => (
            <Fragment>
              <h1 style={{textAlign: `center`}}>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <p style={{textAlign: `center`}}>
                <Link to={AppRoute.MAIN} style={{textDecoration: `underline`}}>Go to main page</Link>
              </p>
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
  loadOfferAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferAction(offerId) {
    dispatch(fetchIdOffer(offerId));
  }
});

// export default App;
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

