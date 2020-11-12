import React from "react";
import renderer from "react-test-renderer";
import {OfferCardBookmark} from "./offer-card-bookmark";
import {AuthorizationStatus} from "../../const";

describe(`OfferCardBookmark should render correctly`, () => {
  it(`OfferCardBookmark should render correctly`, function () {
    const tree = renderer
      .create(
          <OfferCardBookmark
            offerId={`1`}
            offerBookmarkStatus={false}
            onChangeBookmark={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
