import React from "react";
import {fetchPostDetail} from "../redux"
import { connect } from "react-redux";

function PostCard({title,body,userId,id, postDetail, fetchPostDetail}) {
    console.log(postDetail);
    return (
        <>
        <h5 onClick={() => fetchPostDetail(id)}>{title}</h5>
        <p>{body}</p>
        <h6>From User ---- {userId}</h6>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      postDetail: state.detail
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPostDetail: (id) => dispatch(fetchPostDetail(id))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(PostCard)