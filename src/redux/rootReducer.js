import { combineReducers } from "redux";
import postReducer from "./Post/postReducer";
import detailReducer from "./PostDetail/detailReducer";

const rootReducer = combineReducers({
    post:postReducer,
    detail:detailReducer  
})

export default rootReducer