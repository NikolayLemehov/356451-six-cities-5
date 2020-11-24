import {createSelector} from "reselect";

export const getIsValidForm = (state) => state.isValidForm;
export const getIsWaitedResponseFormStatus = (state) => state.isWaitedResponseFormStatus;

export const getIsDisabledSubmitButton = createSelector(
    getIsValidForm,
    getIsWaitedResponseFormStatus,
    (isValidForm, isWaitedResponseFormStatus) => {
      return Boolean(isValidForm && !isWaitedResponseFormStatus);
    }
);
