import React from "react";
import renderer from "react-test-renderer";
import {OfferSortingItem} from "./offer-sorting-item";

const noop = () => {};
describe(`OfferSortingItem should render correctly`, () => {
  it(`OfferSortingItem should render correctly when the type is current`, () => {
    const tree = renderer
      .create(
          <OfferSortingItem
            type={`type1`}
            onCloseMenu={noop}
            currentSortType={`type1`}
            onChangeSortedType={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferSortingItem should render correctly when the type is not current`, () => {
    const tree = renderer
      .create(
          <OfferSortingItem
            type={`type2`}
            onCloseMenu={noop}
            currentSortType={`type1`}
            onChangeSortedType={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
