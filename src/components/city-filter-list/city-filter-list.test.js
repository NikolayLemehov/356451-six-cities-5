import React from "react";
import renderer from "react-test-renderer";
import CityFilterList from "./city-filter-list";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

it(`CityFilterList should render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <CityFilterList
              cities={[`City1`, `City2`, `City3`, `City4`, `City5`, `City6`]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
