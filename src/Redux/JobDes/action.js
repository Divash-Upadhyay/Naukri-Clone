import axios from "axios";
import * as types from "./actionTypes";
// import { saveData } from "./localStorage";

const getSingleRequest = () => {
  return {
    type: types.GET_SINGLE_REQUEST,
  };
};

const getSingleSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_SUCCESS,
    payload,
  };
};

const getSingleFailure = (payload) => {
  return {
    type: types.GET_SINGLE_FAILURE,
    payload,
  };
};

export const fetchJobs = (id) => (dispatch) => {
  dispatch(getSingleRequest());
  return axios
    .get(`http://localhost:3001/ids/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch(getSingleSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getSingleFailure(error.message));
    });
};
