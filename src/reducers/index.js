import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  // Key is property of state
  auth: AuthReducer
});
