import React from "react";
import renderer from "react-test-renderer";
import {CityFilterItem} from "./city-filter-item";

const noop = () => {};
describe(`CityFilterItem should render correctly`, () => {
  it(`CityFilterItem should render correctly when city !== currentCityName`, () => {
    const tree = renderer
      .create(
          <CityFilterItem
            city={`City1`}
            currentCityName={`City2`}
            onChangeCityFilter={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`CityFilterItem should render correctly when city === currentCityName`, () => {
    const tree = renderer
      .create(
          <CityFilterItem
            city={`City1`}
            currentCityName={`City1`}
            onChangeCityFilter={noop}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
