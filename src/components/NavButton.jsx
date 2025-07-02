import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseStyles = "py-2 px-4 rounded-lg transition-all cursor-pointer";
  const activeStyles = "bg-black text-white border-[0.5px] border-gray-400";
  const hoverStyles =
    "hover:bg-black hover:text-white hover:brightness-90 hover:border-[0.5px] hover:border-gray-400";

  return (
    <Link
      to={to}
      className={`${baseStyles} ${isActive ? activeStyles : hoverStyles}`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
