import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";
import NavButton from "../components/NavButton";
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Publish", path: "/publish" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-[#1A1A1A] flex justify-between items-center px-20 py-4">
      <div className="title flex justify-center items-center space-x-2">
        <img src="/icon.svg" className="w-12 h-12" alt="Logo" />
        <h2 className="text-white font-bold">FutureTech</h2>
      </div>

      <div className="nav-items text-gray-600 flex space-x-5">
        {navItems.map(({ label, path }) => (
          <NavButton key={path} label={label} to={path} />
        ))}
      </div>

      <Button
        text={user ? "Profile" : "Login"}
        to={user ? "/profile" : "/login"}
      />
    </nav>
  );
};

export default Navbar;
