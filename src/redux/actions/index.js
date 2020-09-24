import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONES_BY_ID_START,
  FETCH_PHONES_BY_ID_SUCCESS,
  FETCH_PHONES_BY_ID_FAILURE,
  ADD_PHONES_TO_BASKET,
  SEARCH_PHONE,
} from "../actionTypes";

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhone as loadMorePhoneApi,
  fetchPhoneById as fetchPhoneByIdApi,
} from "../../pages/Api";

import { getRenderedPhonesLength } from "../selectors";
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

export const loadMorePhone = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  try {
    dispatch({
      type: LOAD_MORE_PHONES_START,
    });

    // Get data and put into phones
    const phones = await loadMorePhoneApi({ offset });

    // dispatch phones into Redux
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const fetchPhoneById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PHONES_BY_ID_START });

  try {
    const phone = await fetchPhoneByIdApi(id);
    dispatch({
      type: FETCH_PHONES_BY_ID_SUCCESS,
      payload: phone,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_BY_ID_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const addPhoneToBasket = (id) => (dispatch) => {
  dispatch({
    type: ADD_PHONES_TO_BASKET,
    payload: id,
  });
};

export const searchPhone = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text,
  });
};
