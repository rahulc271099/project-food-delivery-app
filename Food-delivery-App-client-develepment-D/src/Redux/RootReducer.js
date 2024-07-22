import { combineReducers } from "@reduxjs/toolkit";
import auth from "./Authentication/Reducer"
import user from "./User/Reducer"

const RootReducer = combineReducers({
    auth,
    user
});
export default RootReducer;