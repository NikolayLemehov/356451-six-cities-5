import React from "react";
import renderer from "react-test-renderer";
import OfferBookmarkContent from "./offer-bookmark-content";

describe(`OfferBookmarkContent should render correctly`, () => {
  it(`OfferBookmarkContent should render correctly when offerBookmarkStatus={false}`, () => {
    const tree = renderer
      .create(
          <OfferBookmarkContent
            offerBookmarkStatus={false}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferBookmarkContent should render correctly when offerBookmarkStatus={true}`, () => {
    const tree = renderer
      .create(
          <OfferBookmarkContent
            offerBookmarkStatus={true}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
