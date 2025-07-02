import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) {
      dispatch(setUser(email));
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
