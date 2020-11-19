import React from "react";
import renderer from "react-test-renderer";
import OfferSorting from "./offer-sorting";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore(testInitialState);
describe(`OfferSorting should render correctly`, () => {
  it(`OfferSorting should render correctly when the menu is closed`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferSorting/>
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it(`OfferSorting should render correctly when the menu is open`, () => {
  const tree = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OfferSorting/>
        </MemoryRouter>
      </Provider>
  );
  const menuButton = tree.find(`.places__sorting-type`);
  menuButton.simulate(`click`);
  expect(tree.debug()).toMatchSnapshot();
  tree.unmount();
});
