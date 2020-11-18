import React from "react";
import renderer from "react-test-renderer";
import OfferSorting from "./offer-sorting";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(testInitialState);

const noop = () => {};
describe(`OfferSorting should render correctly`, () => {
  it(`OfferSorting should render correctly when the menu is closed`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferSorting
                isOpened={false}
                onCloseMenu={noop}
                onToggleMenu={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`OfferSorting should render correctly when the menu is open`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferSorting
                isOpened={true}
                onCloseMenu={noop}
                onToggleMenu={noop}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
