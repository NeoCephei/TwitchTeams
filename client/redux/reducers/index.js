import { combineReducers } from "redux";

import streamers from "./streamers";

const rootReducer = combineReducers({
  streamers,
});

export default rootReducer;
