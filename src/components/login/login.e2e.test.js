import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Login} from "./login";

configure({adapter: new Adapter()});

it(`click on Login correctly`, () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(
      <Login
        onSubmit={onSubmit}
      />
  );

  wrapper.find(`.login__form`).simulate(`click`, {preventDefault() {}});
  expect(onSubmit).toHaveBeenCalledTimes(0);
});
