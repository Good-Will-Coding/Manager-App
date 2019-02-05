import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";

// Email Action Creator

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

// Password Action creator

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
