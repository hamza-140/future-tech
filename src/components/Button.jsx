import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text = "Click Me", to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="bg-[#FFD11A] text-black px-5 py-2 rounded-lg font-semibold shadow-sm hover:brightness-95 hover:cursor-pointer transition-all"
    >
      {text}
    </button>
  );
};

export default Button;
