import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  OFFER_COUNT: 312,
};

ReactDOM.render(
    <App
      offerCount={Setting.OFFER_COUNT}
    />,
    document.querySelector(`#root`)
);
