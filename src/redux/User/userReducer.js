import {fetch_user, fetch_user_success ,fetch_user_error} from "./userType"
const initialState = {
    loading: true,
    user: [],
    error: ''
}

const userReducer = (state = initialState ,action) => {
    switch(action.type) {
        case fetch_user : return {
            ...state,
            loading : true
        }
        case fetch_user_success : return {
            loading : false,
            user: action.payload
        }
        case fetch_user_error : return {
            loading : false,
            user: [],
            error: action.payload
        }
        default : return state
    }
}

export default userReducer