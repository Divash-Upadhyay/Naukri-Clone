import * as types from "./actionTypes";

const initState = {
  jobs: [],
  loading: false,
  error: "",
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_JOB_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.GET_JOB_SUCCESS:
      return {
        ...state,
        jobs: payload,
        loading: false,
        error: "",
      };
    case types.GET_JOB_FAILURE:
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
