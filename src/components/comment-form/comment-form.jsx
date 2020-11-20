import React, {useReducer, useCallback} from "react";
import PropTypes from "prop-types";
import {uploadReview} from "../../store/api-actions";
import {connect} from "react-redux";
import {initialState, reducer} from "./stor/reducer";
import {clearFormFields, setFieldValue, setIsValidForm, setIsWaitedResponseFormStatus} from "./stor/action";
import {getIsDisabledSubmitButton} from "./stor/selectors";

const RADIO_VALUES = [`5`, `4`, `3`, `2`, `1`];
const CommentForm = (props) => {
  const {offerId, uploadReviewAction} = props;

  const [state, dispatch] = useReducer(reducer, initialState);
  const {rating, review} = state;

  const isDisabledSubmitButton = getIsDisabledSubmitButton(state);

  const onFieldChange = useCallback((evt) => {
    dispatch(setFieldValue(evt));
    dispatch(setIsValidForm());
  }, [rating, review]);
  const onClearFormField = () => dispatch(clearFormFields());
  const onSetResponseFormStatus = (status) => dispatch(setIsWaitedResponseFormStatus(status));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSetResponseFormStatus(true);
    uploadReviewAction({rating, review, offerId, onClearFormField, onSetResponseFormStatus});
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RADIO_VALUES.map((it) => (
          <React.Fragment key={it}>
            <input className="form__rating-input visually-hidden" name="rating" value={it} id={`${it}-stars`}
              onChange={onFieldChange} type="radio" checked={rating === it}
            />
            <label htmlFor={`${it}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onFieldChange} value={review} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={isDisabledSubmitButton ? `` : `disabled`}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  offerId: PropTypes.string.isRequired,
  uploadReviewAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  uploadReviewAction(reviewData) {
    dispatch(uploadReview(reviewData));
  },
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
