import React from "react";
import abstract from "../assets/abstract.png"; // adjust path as needed
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="">
      <div className="flex flex-col">
        {/* Top Row: 60% / 40% */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pl-30 pr-15 md:basis-[60%] border-[0.2px] border-gray-700 h-140 flex flex-col justify-center">
            <h2 className="text-[#666666] mb-8 text-lg md:text-xl font-medium">
              Your Journey to Tomorrow Begins Here
            </h2>
            <h1 className="text-3xl md:text-6xl font-semibold text-white leading-tight">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#666666] mt-5 text-base md:text-lg">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="relative flex-1 md:basis-[40%] h-140 flex items-end border-[0.2px] border-gray-700  overflow-hidden">
            <img
              src={abstract}
              alt="Decorative Abstract"
              className="absolute top-0 left-0 w-24 md:w-100 opacity-70"
            />

            <div className="container pl-10 pb-10">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-4">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="/src/assets/user.jpg"
                    alt="User 1"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="/src/assets/user.jpg"
                    alt="User 2"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="/src/assets/user.jpg"
                    alt="User 3"
                  />
                  <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-medium border-2 border-white">
                    +9
                  </div>
                </div>
              </div>

              <h2 className="text-white mb-2 text-lg md:text-xl font-medium">
                Explore 1000+ blogs
              </h2>
              <p className="text-[#666666] mb-5 text-base md:text-lg">
                Over 1,000 blogs on emerging tech trends and breakthroughs.
              </p>
              <Link className="flex items-center gap-x-2">
                <div className="border-[0.2px] border-gray-700 flex p-2 px-3 rounded-md items-center">
                  <p className="text-[#666666] text-base md:text-lg">
                    Explore Blogs
                  </p>
                  <ArrowUpRight size={24} color={"#FFD11A"} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Equal Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-400 h-32 rounded-lg flex items-center justify-center">
            Box 3
          </div>
          <div className="bg-pink-400 h-32 rounded-lg flex items-center justify-center">
            Box 4
          </div>
          <div className="bg-purple-400 h-32 rounded-lg flex items-center justify-center">
            Box 5
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
