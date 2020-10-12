import { combineReducers }  from "redux";
import game_shop from "./gmshp_reducer";
import user from "./user";

const rootReducers = combineReducers({
    game_shop,
    user
});
export default rootReducers;