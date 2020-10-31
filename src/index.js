import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {fetchOffers} from "./store/api-actions";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

Promise.all([
  store.dispatch(fetchOffers())
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });

