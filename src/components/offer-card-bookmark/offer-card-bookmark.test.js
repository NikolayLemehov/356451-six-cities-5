import React from "react";
import renderer from "react-test-renderer";
import {OfferCardBookmark} from "./offer-card-bookmark";
import {AuthorizationStatus} from "../../const";

describe(`OfferCardBookmark should render correctly`, () => {
  it(`OfferCardBookmark should render correctly when bookmark false and authorization AUTH`, function () {
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
  it(`OfferCardBookmark should render correctly when bookmark true and authorization AUTH`, function () {
    const tree = renderer
      .create(
          <OfferCardBookmark
            offerId={`1`}
            offerBookmarkStatus={true}
            onChangeBookmark={() => {}}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
