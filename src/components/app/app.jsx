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
  const bookMarkOffers = offers.filter((it) => it.isBookMark);

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
          <Favorites
            bookMarkOffers={bookMarkOffers}
          />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/offer">
          <Offer
            offer={offers[0]}
            nearOffers={offers.slice(0, 3)}
          />
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
  offerCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerPropType).isRequired,
};

export default App;
