import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";

configure({adapter: new Adapter()});

const mockOffer = {
  id: `1`,
  img: [`url1`, `url2`, `url3`, `url4`, `url5`, `url6`],
  smallImg: `small-url`,
  title: `title`,
  description: [`description`],
  isPremium: false,
  type: `type1`,
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
};

it(`click on OfferCard correctly`, () => {
  const onMouseOverOffer = jest.fn();
  const onChangeOfferId = jest.fn();
  const onChangeBookmarkOffers = jest.fn();
  const onChangeBookmark = jest.fn();
  const wrapper = shallow(
      <OfferCard
        offer={mockOffer}
        changedBookmarkOffer={mockOffer}
        currentCardType={`type1`}
        overOfferId={`1`}
        onMouseOverOffer={onMouseOverOffer}
        onChangeOfferId={onChangeOfferId}
        onChangeBookmarkOffers={onChangeBookmarkOffers}
        onChangeBookmark={onChangeBookmark}
      />
  );

  wrapper.find(`.place-card__img-link`).simulate(`click`);
  expect(onChangeBookmark).toHaveBeenCalledTimes(0);
});
