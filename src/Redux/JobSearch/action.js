import axios from "axios";
import * as types from "./actionTypes";
import { saveData } from "./localStorage";

const getJobRequest = (payload) => {
  return {
    type: types.GET_JOB_REQUEST,
    payload,
  };
};

const getDataSuccess = (payload) => {
  return {
    type: types.GET_JOB_SUCCESS,
    payload,
  };
};

const getDataFailure = (payload) => {
  return {
    type: types.GET_JOB_FAILURE,
    payload,
  };
};

export const getJobs = (job) => (dispatch) => {
  dispatch(getJobRequest());
  if (job !== "") {
    return axios
      .get(`https://divash-api.herokuapp.com/jobs/${job}`, {
        params: {
          page: 1,
          limit: 10,
        },
      })
      .then((response) => {
        saveData("data", response.data);
        dispatch(getDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDataFailure(error.message));
      });
  }
};
