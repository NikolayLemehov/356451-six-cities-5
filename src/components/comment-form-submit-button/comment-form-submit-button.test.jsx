import React from "react";
import renderer from "react-test-renderer";
import CommentFormSubmitButton from "./comment-form-submit-button";

describe(`CommentFormSubmitButton should render correctly`, () => {
  it(`CommentFormSubmitButton should render correctly when isDisabledSubmitButton={false}`, () => {
    const tree = renderer
      .create(<CommentFormSubmitButton
        isDisabledSubmitButton={false}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`CommentFormSubmitButton should render correctly when isDisabledSubmitButton={true}`, () => {
    const tree = renderer
      .create(<CommentFormSubmitButton
        isDisabledSubmitButton={true}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
