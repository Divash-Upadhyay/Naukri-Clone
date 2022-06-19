import * as types from "./actionTypes";

export const getAuthRequest = () => {
  return {
    type: types.GET_AUTH_REQUEST,
  };
};

export const getAuthSuccess = (payload) => {
  return {
    type: types.GET_AUTH_SUCCESS,
    payload,
  };
};

export const getAuthFailure = (payload) => {
  return {
    type: types.GET_AUTH_FAILURE,
    payload,
  };
};
