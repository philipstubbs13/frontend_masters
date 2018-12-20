import { combineReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

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
  location,
  animal,
  breed,
  breeds
});
