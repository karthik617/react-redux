import {fetch_detail, fetch_detail_success ,fetch_detail_error} from "./detailType";
const initialState = {
    loading: true,
    data: [],
    error: ''
}

const detailReducer = (state = initialState ,action) => {
    switch(action.type) {
        case fetch_detail : return {
            ...state,
            loading : true
        }
        case fetch_detail_success : return {
            loading : false,
            data: action.payload
        }
        case fetch_detail_error : return {
            loading : false,
            data: [],
            error: action.payload
        }
        default : return state
    }
}

export default detailReducer