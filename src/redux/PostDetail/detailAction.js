
import {fetch_detail, fetch_detail_success ,fetch_detail_error} from "./detailType";
import axios from 'axios'

export const fetchResponse = () => {
    return {
        type: fetch_detail
    }
}
export const fetchResponseSuccess = posts => {
    return {
        type: fetch_detail_success,
        payload: posts
    }
}
export const fetchResponseError = error => {
    return {
        type: fetch_detail_error,
        payload: error
    }
}

export const fetchPostDetail = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch(fetchResponse())
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
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

