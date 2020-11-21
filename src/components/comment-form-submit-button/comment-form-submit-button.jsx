import React from "react";
import PropTypes from "prop-types";

const CommentFormSubmitButton = (props) => {
  const {isDisabledSubmitButton} = props;

  return (
    <button className="reviews__submit form__submit button" type="submit"
      disabled={isDisabledSubmitButton ? undefined : `disabled`}>
      Submit
    </button>
  );
};

CommentFormSubmitButton.propTypes = {
  isDisabledSubmitButton: PropTypes.bool.isRequired,
};

export default CommentFormSubmitButton;
