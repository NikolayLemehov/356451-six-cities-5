import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CityFilterItem} from "./city-filter-item";

configure({adapter: new Adapter()});

describe(`click on CityFilterItem correctly`, () => {
  test(`click on CityFilterItem correctly when city !== currentCityName`, () => {
    const onChangeCityFilter = jest.fn();
    const wrapper = shallow(
        <CityFilterItem
          city={`City1`}
          currentCityName={`City2`}
          onChangeCityFilter={onChangeCityFilter}
        />
    );

    wrapper.find(`.locations__item-link`).simulate(`click`, {preventDefault() {}});
    expect(onChangeCityFilter).toHaveBeenCalledTimes(1);
  });

  test(`click on CityFilterItem correctly when city === currentCityName`, () => {
    const onChangeCityFilter = jest.fn();
    const wrapper = shallow(
        <CityFilterItem
          city={`City1`}
          currentCityName={`City1`}
          onChangeCityFilter={onChangeCityFilter}
        />
    );

    wrapper.find(`.locations__item-link`).simulate(`click`, {preventDefault() {}});
    expect(onChangeCityFilter).toHaveBeenCalledTimes(0);
  });
});
