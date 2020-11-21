import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferSorting} from "./offer-sorting";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {testInitialState} from "../../test-data";

configure({adapter: new Adapter()});
const mockStore = configureMockStore();
const store = mockStore(testInitialState);

it(`click on OfferSorting correctly`, () => {
  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OfferSorting
            currentSortType={`Popular`}
          />
        </MemoryRouter>
      </Provider>
  );

  const menuButton = wrapper.find(`.places__sorting-type`);

  menuButton.simulate(`click`);
  let typeList = wrapper.find(`.places__options--custom`);
  expect(typeList.hasClass(`places__options--opened`)).toEqual(true);

  menuButton.simulate(`click`);
  typeList = wrapper.find(`.places__options--custom`);
  expect(typeList.hasClass(`places__options--opened`)).toEqual(false);
});

