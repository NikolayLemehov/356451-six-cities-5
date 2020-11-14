import React from "react";
import renderer from "react-test-renderer";
import {OfferBookmark} from "./offer-bookmark";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore({
  COMMON: {
    offers: [],
    nearOffers: [],
    changedBookmarkOffer: {},
    pageOffer: {},
    bookmarkOffers: [],
    authInfo: {},
    cities: [`City1`, `City2`, `City3`, `City4`, `City5`, `City6`],
    currentCityName: `Paris`,
    currentSortType: `Popular`,
    overOfferId: ``,
    reviews: [],
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
  },
});

const noop = () => {};
describe(`OfferBookmark should render correctly`, () => {
  it(`OfferBookmark should render correctly when isAuthorizedStatus={false} and offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={false}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={false} and offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={false}
                offerBookmarkStatus={true}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={true} and offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={false}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmark should render correctly when isAuthorizedStatus={true} and offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmark
                offerId={`1`}
                isAuthorizedStatus={true}
                offerBookmarkStatus={true}
                onChangeBookmark={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
