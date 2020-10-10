import React, {PureComponent} from "react";

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: ``,
      review: ``,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {rating, review} = this.state;
    return (
      <form className="reviews__form form" action="#" method="post"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {[`5`, `4`, `3`, `2`, `1`].map((it) => (
            <React.Fragment key={it}>
              <input className="form__rating-input visually-hidden" name="rating" value={it} id={`${it}-stars`}
                onChange={this.handleFieldChange} type="radio"
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
          onChange={this.handleFieldChange}/>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
        <p>rating: {rating}</p>
        <p>review: {review}</p>
      </form>
    );
  }
}

export default CommentForm;
