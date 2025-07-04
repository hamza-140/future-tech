import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Always show Home inside AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
