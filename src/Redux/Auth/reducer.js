import * as types from "./actionTypes";

const initState = {
  auth: false,
  token: null,
  error: null,
  loading: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        auth: false,
        error: "",
      };
    case types.GET_AUTH_SUCCESS:
      return {
        ...state,
        auth: true,
        token: payload,
        loading: false,
        error: "",
      };
    case types.GET_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
