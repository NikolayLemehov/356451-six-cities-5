import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import {offerPropType} from "../../prop-types";

const App = (props) => {
  const {offerCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offerCount={offerCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/offer">
          <Offer/>
        </Route>
        <Route path="/offer/:id" exact component={Offer}/>
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
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};

export default App;
