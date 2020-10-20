import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import {offerPropType} from "../../prop-types";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path="/offer/:id" exact
          render={({match}) => (
            <Offer
              offer={offers.find((it) => it.id === match.params.id)}
              nearOffers={offers.slice(0, 3)}
            />
          )}
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
                <Link to="/" style={{textDecoration: `underline`}}>Go to main page</Link>
              </p>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps)(App);
