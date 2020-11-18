import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferSortingItem} from "./offer-sorting-item";

configure({adapter: new Adapter()});

const type = `type1`;
const currentSortType = `current type`;

test(`click on OfferSortingItem correctly`, () => {
  const onChangeSortedType = jest.fn();
  const onCloseMenu = jest.fn();
  const wrapper = shallow(
      <OfferSortingItem
        type={type}
        currentSortType={currentSortType}
        onChangeSortedType={onChangeSortedType}
        onCloseMenu={onCloseMenu}
      />
  );

  wrapper.find(`li.places__option`).simulate(`click`);
  expect(onChangeSortedType).toHaveBeenCalledTimes(1);
  expect(onCloseMenu).toHaveBeenCalledTimes(1);
});

