import { STATE } from "../../ActionType/State";

export const State = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATE:
      return payload;
    default:
      return state;
  }
};
