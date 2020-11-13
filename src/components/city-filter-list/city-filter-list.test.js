import React from "react";
import renderer from "react-test-renderer";
import {CityFilterList} from "./city-filter-list";

it(`CityFilterList should render correctly`, () => {
  const tree = renderer
    .create(<CityFilterList
      currentCityName={`City1`}
      cities={[`City1`, `City2`, `City3`, `City4`, `City5`, `City6`]}
      onChangeCityFilter={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
