import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function ExploreBanner() {
  return (
    <section className="w-full bg-[#1A1A1A] px-4 md:px-12 py-6 md:py-8 lg:py-10">
      <div className="flex justify-between">
        <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-center">
          <p className="w-fit text-gray-200 bg-[#333333] mt-4 rounded-sm py-1 px-2">
            A Knowledge Treasure Trove
          </p>

          <h1 className="text-white text-2xl md:text-4xl mt-2 lg:text-5xl font-semibold">
            Explore FutureTech's In-Depth Blog Posts
          </h1>
        </div>
        <Link className="flex items-center gap-x-2">
          <div className="border-[0.2px] border-gray-700 flex p-2 w-max px-3 rounded-md items-center">
            <p className="text-[#666666] text-base md:text-lg px-2">
              View All Blogs
            </p>
            <ArrowUpRight size={24} color={"#FFD11A"} />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ExploreBanner;
