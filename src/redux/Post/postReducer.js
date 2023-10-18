import {fetch_post, fetch_post_success ,fetch_post_error} from "./postType"
const initialState = {
    loading: true,
    data: [],
    error: ''
}

const postReducer = (state = initialState ,action) => {
    switch(action.type) {
        case fetch_post : return {
            ...state,
            loading : true
        }
        case fetch_post_success : return {
            loading : false,
            data: action.payload
        }
        case fetch_post_error : return {
            loading : false,
            data: [],
            error: action.payload
        }
        default : return state
    }
}

export default postReducer