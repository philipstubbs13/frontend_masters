import { combineReducers } from "redux";
import location from "./location";

/* 
previousState = { location: "Seattle, WA" }
action = { type: "SET_LOCATION", payload: "San Francisco, CA" }
*/
// const rootReducer = function(state, action) {
//   switch (action.type) {
//     case "SET_LOCATION":
//       return location(state, action);
//   }
// };

export default combineReducers({
  location
});
