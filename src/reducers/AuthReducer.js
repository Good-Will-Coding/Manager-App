const INTITIAL_STATE = { EMAIL: "" };
import { EMAIL_CHANGED } from "../actions/types";

export default (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
