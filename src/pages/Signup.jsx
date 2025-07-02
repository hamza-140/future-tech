import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email.trim()) {
      dispatch(setUser(email));
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
