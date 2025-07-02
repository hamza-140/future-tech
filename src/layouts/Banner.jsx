import React from "react";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#141414] flex justify-center items-center">
      <div className=" text-gray-400 text-center py-2">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </div>
      <ArrowUpRight size={24} color={"#FFD11A"} />
    </div>
  );
};

export default Banner;
