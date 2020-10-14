import { combineReducers }  from "redux";
import user from "./user";
import page from "./page";

const rootReducers = combineReducers({
    user,page
});
export default rootReducers;