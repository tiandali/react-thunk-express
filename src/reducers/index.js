import { combineReducers } from "redux"
import auth from "./auth"
import flashMessages from "./flashMessage"
const rootReducer = combineReducers({
  auth,
  flashMessages,
})
export default rootReducer
