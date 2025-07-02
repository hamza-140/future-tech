import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, logout } from "../features/auth/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>User: {user || "No user logged in"}</p>
      <button onClick={() => dispatch(setUser("Hamza"))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
