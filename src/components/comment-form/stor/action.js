export const ActionType = {
  SET_FIELD_VALUE: `SET_FIELD_VALUE`,
  CLEAR_FORM_FIELDS: `CLEAR_FORM_FIELDS`,
  SET_IS_VALID_FORM: `SET_IS_VALID_FORM`,
  SET_IS_WAITED_RESPONSE_FORM_STATUS: `SET_IS_WAITED_RESPONSE_FORM_STATUS`,
};
export const setFieldValue = (evt) => ({
  type: ActionType.SET_FIELD_VALUE,
  payload: {
    name: evt.target.name,
    value: evt.target.value,
  },
});
export const clearFormFields = () => ({
  type: ActionType.CLEAR_FORM_FIELDS,
});
export const setIsValidForm = () => ({
  type: ActionType.SET_IS_VALID_FORM,
});
export const setIsWaitedResponseFormStatus = (status) => ({
  type: ActionType.SET_IS_WAITED_RESPONSE_FORM_STATUS,
  payload: status,
});
