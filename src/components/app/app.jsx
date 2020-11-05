import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route, Router, Link} from "react-router-dom";
// import {connect} from "react-redux";
import Main from "../main/main";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
// import Offer from "../offer/offer";
import browserHistory from "../../browser-history";
// import {offerPropType} from "../../prop-types";
import {AppRoute} from "../../const";

const App = () => {
  // const {offers} = props;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.LOGIN}
          render={() => (
            <Login/>
          )}
        />
        {/* <Route path="/offer/:id" exact*/}
        {/*  render={({match}) => (*/}
        {/*    <Offer*/}
        {/*      offer={offers.find((it) => it.id === match.params.id)}*/}
        {/*      nearOffers={offers.slice(0, 3)}*/}
        {/*    />*/}
        {/*  )}*/}
        {/* />*/}
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

// App.propTypes = {
//   offers: PropTypes.arrayOf(offerPropType).isRequired,
// };
//
// const mapStateToProps = (state) => ({
//   offers: state.offers,
// });

export default App;
// export {App};
// export default connect(mapStateToProps)(App);

