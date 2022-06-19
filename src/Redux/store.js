import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import searchReducer from "./JobSearch/reducer";
import singleJob from "./JobDes/reducer";
import authReducer from "./Auth/reducer";

export const rootReducer = combineReducers({
  searchData: searchReducer,
  singleJob: singleJob,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
console.log(store.getState());
