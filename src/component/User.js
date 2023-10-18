import React from "react";
import { useEffect } from "react";
import { getUser } from "../redux";
import { connect } from "react-redux";

function User({ userData, userList }) {
  useEffect(() => {
    userList();
  }, []);
  console.log(userData);
  return userData.loading ? (<h5>loading....</h5>) :
  (userData.error ? (<h5>{userData.error}</h5>) : 
  <>
  <h4>User List</h4>
  {userData.user.map(u => <p key={u.id}>{u.name}</p>)}
  </>
  )
   
}
const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userList: () => dispatch(getUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
