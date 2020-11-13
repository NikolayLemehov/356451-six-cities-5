import React, {Fragment} from 'react';
import {Switch, Route, Router, Link} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";

const App = () => {

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}
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
        <Route exact path={`${AppRoute.OFFER}/:id`}
          render={({match}) => {
            return (
              <Offer
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

export default App;

