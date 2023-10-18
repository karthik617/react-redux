import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer  from "./User/userReducer";

const store = createStore(userReducer, applyMiddleware(thunk))

export default store