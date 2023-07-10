import { USER_DATA } from "../../ActionType/UserData";

export const userData = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DATA:
      return payload;
    default:
      return state;
  }
};
