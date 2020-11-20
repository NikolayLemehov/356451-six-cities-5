import {ActionType} from "./action";
import {extend} from "../../../utils";
import {CommentCharacter} from "../../../const";

export const initialState = {
  rating: ``,
  review: ``,
  isValidForm: false,
  isWaitedResponseFormStatus: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FIELD_VALUE:
      return extend(state, {
        [`${action.payload.name}`]: action.payload.value,
      });
    case ActionType.CLEAR_FORM_FIELDS:
      return extend(state, {
        rating: initialState.rating,
        review: initialState.review,
      });
    case ActionType.SET_IS_VALID_FORM:
      return extend(state, {
        isValidForm: state.rating && state.review.length >= CommentCharacter.MIN
          && state.review.length <= CommentCharacter.MAX,
      });
    case ActionType.SET_IS_WAITED_RESPONSE_FORM_STATUS:
      return extend(state, {
        isWaitedResponseFormStatus: action.payload,
      });
  }
  return state;
};
