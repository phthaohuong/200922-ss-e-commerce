import * as R from "ramda";
import { ADD_PHONES_TO_BASKET } from "../actionTypes";

let initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONES_TO_BASKET:
      return R.append(payload, state);
    default:
      return state;
  }
};
