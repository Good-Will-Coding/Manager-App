// Email Action Creator

export const emailChanged = text => {
  return {
    type: "EMAIL_CHANGED",
    payload: text
  };
};