import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import OfferList from "./offer-list";
import {testInitialState} from "../../test-data";
import {upperCaseFirst} from "../../utils";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const offers = [
  {
    id: `1`,
    img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
    smallImg: `small-url`,
    title: `title`,
    description: [`description`],
    isPremium: false,
    type: upperCaseFirst(`type1`),
    rating: 4.8,
    bedroom: 3,
    visitor: 4,
    price: 226,
    option: [`option1`, `option2`, `option3`, `option4`],
    isBookmark: false,
    city: `city1`,
    cityCoordinates: [48.85661, 2.351499],
    cityZoom: 13,
    host: `hostName`,
    hostTop: false,
    avatar: `avatar_url`,
    coordinates: [48.877610000000004, 2.333499],
  },
  {
    id: `4`,
    img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
    smallImg: `small-url`,
    title: `title`,
    description: [`description`],
    isPremium: false,
    type: upperCaseFirst(`type1`),
    rating: 4.8,
    bedroom: 3,
    visitor: 4,
    price: 126,
    option: [`option1`, `option2`, `option3`, `option4`],
    isBookmark: false,
    city: `city1`,
    cityCoordinates: [48.85661, 2.351499],
    cityZoom: 13,
    host: `hostName`,
    hostTop: false,
    avatar: `avatar_url`,
    coordinates: [48.877610000000004, 2.333499],
  },
  {
    id: `7`,
    img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
    smallImg: `small-url`,
    title: `title`,
    description: [`description`],
    isPremium: false,
    type: upperCaseFirst(`type1`),
    rating: 4.8,
    bedroom: 3,
    visitor: 4,
    price: 256,
    option: [`option1`, `option2`, `option3`, `option4`],
    isBookmark: false,
    city: `city1`,
    cityCoordinates: [48.85661, 2.351499],
    cityZoom: 13,
    host: `hostName`,
    hostTop: false,
    avatar: `avatar_url`,
    coordinates: [48.877610000000004, 2.333499],
  },
];

it(`OfferList should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <OfferList
              offers={offers}
              currentCardType={`main`}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
