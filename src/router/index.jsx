import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Layout */}
        <Route element={user ? <AppLayout /> : <Navigate to="/login" />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Public Routes */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
