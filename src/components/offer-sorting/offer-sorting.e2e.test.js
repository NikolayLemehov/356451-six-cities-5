import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferSorting from "./offer-sorting";

configure({adapter: new Adapter()});

it(`click on OfferSorting correctly`, () => {
  const onCloseMenu = jest.fn();
  const onToggleMenu = jest.fn();
  const wrapper = shallow(
      <OfferSorting
        isOpened={false}
        onCloseMenu={onCloseMenu}
        onToggleMenu={onToggleMenu}
      />
  );

  wrapper.find(`span.places__sorting-type`).simulate(`click`);
  expect(onToggleMenu).toHaveBeenCalledTimes(1);
});

