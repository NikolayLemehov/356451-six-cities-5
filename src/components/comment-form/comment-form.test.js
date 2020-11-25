import React from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const noop = () => {};
describe(`CommentForm should render correctly`, () => {
  it(`CommentForm should render correctly by default`, () => {
    const tree = renderer
      .create(<CommentForm
        offerId={`1`}
        uploadReviewAction={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`CommentForm should render correctly when checked twoStarsInput`, () => {
    const tree = mount(
        <CommentForm
          offerId={`1`}
          uploadReviewAction={noop}
        />
    );

    const twoStarsInput = tree.find(`.form__rating-input`).at(3);
    twoStarsInput.simulate(`change`);
    expect(tree.debug()).toMatchSnapshot();
  });
});
