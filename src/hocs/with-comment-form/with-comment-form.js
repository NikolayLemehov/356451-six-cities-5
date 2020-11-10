import React, {PureComponent} from "react";
import {CommentCharacter} from "../../const";

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: ``,
        review: ``,
        isValidForm: false,
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    componentDidUpdate() {
      const {rating, review} = this.state;

      if (rating && review.length >= CommentCharacter.MIN && review.length <= CommentCharacter.MAX) {
        this.setState({isValidForm: true});
      } else {
        this.setState({isValidForm: false});
      }
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, review, isValidForm} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          isValidForm={isValidForm}
          onFieldChange={this.handleFieldChange}
        />
      );
    }
  }
  return WithCommentForm;
};

export default withCommentForm;
