import {reducer} from "./reducer";
import {ActionType} from "./action";

it(`Reducer comment form without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    rating: ``,
    review: ``,
    isValidForm: false,
    isWaitedResponseFormStatus: false,
  });
});

it(`Reducer comment form should update rating`, () => {
  expect(reducer({
    rating: `2`,
  }, {
    type: ActionType.SET_FIELD_VALUE,
    payload: {
      name: `rating`,
      value: `4`,
    }
  })).toEqual({
    rating: `4`
  });
});

it(`Reducer comment form should update review`, () => {
  expect(reducer({
    review: `old review`,
  }, {
    type: ActionType.SET_FIELD_VALUE,
    payload: {
      name: `review`,
      value: `new review`,
    }
  })).toEqual({
    review: `new review`
  });
});

it(`Reducer comment form should update isValidForm`, () => {
  expect(reducer({
    rating: `4`,
    review: `something review`,
  }, {
    type: ActionType.CLEAR_FORM_FIELDS,
    payload: {
      name: ``,
      value: ``,
    }
  })).toEqual({
    rating: ``,
    review: ``,
  });
});

it(`Reducer comment form should update isValidForm by rating and review`, () => {
  expect(reducer({
    rating: `4`,
    review: `Some review more than 50 character. Some review more than 50 character.`,
    isValidForm: false,
  }, {
    type: ActionType.SET_IS_VALID_FORM,
  })).toEqual({
    rating: `4`,
    review: `Some review more than 50 character. Some review more than 50 character.`,
    isValidForm: true
  });
});

it(`Reducer comment form should update isValidForm by wrong rating and review`, () => {
  expect(reducer({
    rating: ``,
    review: `Some review more than 50 character. Some review more than 50 character.`,
    isValidForm: true,
  }, {
    type: ActionType.SET_IS_VALID_FORM,
  })).toEqual({
    rating: ``,
    review: `Some review more than 50 character. Some review more than 50 character.`,
    isValidForm: false
  });
});

it(`Reducer comment form should update isValidForm by rating and wrong review`, () => {
  expect(reducer({
    rating: `4`,
    review: `Some review less than 50 character.`,
    isValidForm: true,
  }, {
    type: ActionType.SET_IS_VALID_FORM,
  })).toEqual({
    rating: `4`,
    review: `Some review less than 50 character.`,
    isValidForm: false
  });
});

it(`Reducer comment form should update isWaitedResponseFormStatus`, () => {
  expect(reducer({
    isWaitedResponseFormStatus: false,
  }, {
    type: ActionType.SET_IS_WAITED_RESPONSE_FORM_STATUS,
    payload: true,
  })).toEqual({
    isWaitedResponseFormStatus: true
  });
});
