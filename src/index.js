import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import {rootReducer} from "./store/reducers/root-reducer";
import {checkAuth, fetchBookmarkOffers, fetchOffers} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus, HttpCode, ResponseType} from "./const";
import swal from "sweetalert";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

const getErrorsString = (...responses) => responses.reduce((acc, it) => {
  if (it === ResponseType.SUCCESS || it.status === HttpCode.UNAUTHORIZED) {
    return `${acc}`;
  } else {
    return acc ? `${acc}; ${it}` : `${it}`;
  }
}, ``);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchBookmarkOffers()),
])
  .then((response) => {
    const errorString = getErrorsString(...response);
    if (!errorString) {
      ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.querySelector(`#root`)
      );
    } else {
      swal(`Error`, `${errorString}`, `error`);
    }
  })
  .catch((err) => {
    swal(`Error`, String(err.text), `error`);
  });
