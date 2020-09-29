import React from 'react';
import PropTypes from 'prop-types';
import Page from "../page/page";

const App = (props) => {
  const {offerCount} = props;

  return (
    <Page offerCount={offerCount}/>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
};

export default App;
