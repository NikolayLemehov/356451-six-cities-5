import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter, Link} from "react-router-dom";
import Main from "../main/main";

const App = (props) => {
  const {offerCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offerCount={offerCount}/>
        </Route>
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
};

export default App;
