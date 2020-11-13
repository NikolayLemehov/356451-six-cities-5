import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import App from "./app";

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

describe(`App snapshot`, () => {
  it(`Should App render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <App/>,
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
