import { combineReducers }  from "redux";
import user from "./user";
import page_sva from "./page_sva";
import page_gst from "./page_gst";

const rootReducers = combineReducers({
    user,page_sva,page_gst
});
export default rootReducers;