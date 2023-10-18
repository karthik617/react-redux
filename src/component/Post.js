import React from "react";
import { useEffect } from "react";
import { fetchPost } from "../redux";
import { connect } from "react-redux";
import PostCard from "./PostCard";

function Post({ postData, fetchPost, postDetail ,fetchPostDetail}) {
  useEffect(() => {
    fetchPost();
  }, []);
  console.log(postData);
  return postData.loading ? (<h5>loading....</h5>) :
  (postData.error ? (<h5>{postData.error}</h5>) : 
  <>
  <h4>Post List</h4>
  {postData.data.map(post => <PostCard title={post.title} body={post.body} userId={post.userId} id={post.id} key={post.id}/>)}
  </>
  )
   
}
const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
