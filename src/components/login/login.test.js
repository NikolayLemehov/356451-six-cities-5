import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Login} from "./login";

const noop = () => {};
const mockStore = configureMockStore();
const store = mockStore({
  COMMON: {
    offers: [],
    nearOffers: [],
    changedBookmarkOffer: {},
    pageOffer: {},
    bookmarkOffers: [],
    authInfo: {},
    cities: [`Paris`, `City2`, `City3`, `City4`, `City5`, `City6`],
    currentCityName: `Paris`,
    currentSortType: `Popular`,
    overOfferId: ``,
    reviews: [],
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
  },
});

it(`Login should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Login
              onSubmit={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
