import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";

it(`MainEmpty should render correctly`, () => {
  const tree = renderer
    .create(
        <MainEmpty
          currentCityName={`City1`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
