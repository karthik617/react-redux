
import {fetch_user, fetch_user_success ,fetch_user_error} from "./userType";
import axios from 'axios'

export const fetchUser = () => {
    return {
        type: fetch_user
    }
}
export const fetchUserSuccess = users => {
    return {
        type: fetch_user_success,
        payload: users
    }
}
export const fetchUserError = error => {
    return {
        type: fetch_user_error,
        payload: error
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch(fetchUser())
        axios('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const user = response.data
            console.log(user);
            dispatch(fetchUserSuccess(user))
        }).catch((error) => {
            const errorMsg = error.message
            dispatch(fetchUserError(errorMsg))
        })
    }
}

