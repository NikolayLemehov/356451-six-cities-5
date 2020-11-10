import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {uploadReview} from "../../store/api-actions";
import {connect} from "react-redux";
import {setResponseFormStatus} from "../../store/action";
import {getIsWaitedResponseFormStatus} from "../../store/selectors";

const radioValues = [`5`, `4`, `3`, `2`, `1`];

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {rating, review, offerId, uploadReviewAction, setResponseFormStatusAction} = this.props;
    setResponseFormStatusAction(true);
    uploadReviewAction({rating, review, offerId});
  }

  render() {
    const {rating, review, isValidForm, onFieldChange, isWaitedResponseFormStatus} = this.props;
    const isDisabledSubmitButton = isValidForm && !isWaitedResponseFormStatus;

    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {radioValues.map((it) => (
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
  }
}

CommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  isValidForm: PropTypes.bool.isRequired,
  isWaitedResponseFormStatus: PropTypes.bool.isRequired,
  offerId: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  setResponseFormStatusAction: PropTypes.func.isRequired,
  uploadReviewAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isWaitedResponseFormStatus: getIsWaitedResponseFormStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  uploadReviewAction(reviewData) {
    dispatch(uploadReview(reviewData));
  },
  setResponseFormStatusAction(isWaited) {
    dispatch(setResponseFormStatus(isWaited));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
