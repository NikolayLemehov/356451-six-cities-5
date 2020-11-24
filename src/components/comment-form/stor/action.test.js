import {ActionType, clearFormFields, setFieldValue, setIsValidForm, setIsWaitedResponseFormStatus} from "./action";

describe(`Action creator comment form work correctly`, () => {
  it(`Action creator comment form work correctly to set field value`, () => {
    expect(setFieldValue({
      target: {
        name: `rating`,
        value: `4`,
      }
    })).toEqual({
      type: ActionType.SET_FIELD_VALUE,
      payload: {
        name: `rating`,
        value: `4`,
      },
    });
  });

  it(`Action creator comment form work correctly when clear field`, () => {
    expect(clearFormFields()).toEqual({
      type: ActionType.CLEAR_FORM_FIELDS,
    });
  });

  it(`Action creator comment form work correctly when update isValidForm`, () => {
    expect(setIsValidForm()).toEqual({
      type: ActionType.SET_IS_VALID_FORM,
    });
  });

  it(`Action creator comment form work correctly when update isWaitedResponseFormStatus`, () => {
    expect(setIsWaitedResponseFormStatus(true)).toEqual({
      type: ActionType.SET_IS_WAITED_RESPONSE_FORM_STATUS,
      payload: true,
    });
  });
});
