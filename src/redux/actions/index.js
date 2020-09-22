import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
} from "../actionTypes";

import { fetchPhones as fetchPhonesApi } from "../../pages/Api";
/*
fetchPhones is synchronize action because it returns another action
which will be done in a synchronous way to make it easier to read we'll using async await from ES7
and it will dispatch success & fail actions
 */
export const fetchPhones = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PHONES_START,
    });

    // Get data and put into phones
    const phones = await fetchPhonesApi();

    // dispatch phones into Redux
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true,
    });
  }
};
