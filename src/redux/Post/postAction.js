
import {fetch_post, fetch_post_success ,fetch_post_error} from "./postType";
import axios from 'axios'

export const fetchResponse = () => {
    return {
        type: fetch_post
    }
}
export const fetchResponseSuccess = posts => {
    return {
        type: fetch_post_success,
        payload: posts
    }
}
export const fetchResponseError = error => {
    return {
        type: fetch_post_error,
        payload: error
    }
}

export const fetchPost = () => {
    return (dispatch) => {
        dispatch(fetchResponse())
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data
            console.log(posts);
            dispatch(fetchResponseSuccess(posts))
        }).catch((error) => {
            const errorMsg = error.message
            dispatch(fetchResponseError(errorMsg))
        })
    }
}

