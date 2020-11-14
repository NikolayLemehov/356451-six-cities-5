import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Favorites} from "./favorites";

const mockStore = configureMockStore();
const store = mockStore({
  COMMON: {
    offers: [],
    nearOffers: [],
    changedBookmarkOffer: {},
    pageOffer: {},
    bookmarkOffers: [],
    authInfo: {},
    cities: [`City7`, `City2`, `City3`, `City4`, `City5`, `City6`],
    currentCityName: `Paris`,
    currentSortType: `Popular`,
    overOfferId: ``,
    reviews: [],
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
  },
});
const bookmarkOffersByCity = new Map();
bookmarkOffersByCity.set(`City1`, [
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City1`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `1`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 493,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City1`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `4`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 123,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
]);
bookmarkOffersByCity.set(`City3`, [
  {
    avatar: `avatar-url`,
    bedroom: 3,
    city: `City3`,
    cityCoordinates: [50.938361, 6.959974],
    cityZoom: 13,
    coordinates: [50.957361, 6.9509739999999995],
    description: [`description`],
    host: `host-name`,
    hostTop: true,
    id: `8`,
    img: [`img-url1`, `img-url2`, `img-url3`, `img-url4`, `img-url5`, `img-url6`, `img-url7`, `img-url8`],
    isBookmark: true,
    isPremium: false,
    option: [`option1`, `option2`, `option3`, `option4`, `option5`, `option6`, `option7`],
    price: 383,
    rating: 3.8,
    smallImg: `small-img-url`,
    title: `title`,
    type: `type`,
    visitor: 4,
  },
]);

describe(`Favorites should render correctly`, () => {
  it(`Favorites should render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Favorites
                bookmarkOffersByCity={bookmarkOffersByCity}
              />)
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
