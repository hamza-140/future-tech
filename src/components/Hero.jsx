import React, { Fragment } from "react";
import abstract from "/abstract.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-[#141414]">
      <div className="flex flex-col">
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
                    src="/user.jpg"
                    alt="User 1"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="/user.jpg"
                    alt="User 2"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src="/user.jpg"
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
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="py-10 px-20 border-[0.2px] border-gray-700 flex items-center justify-center">
            <div className="flex flex-col w-full max-w-md">
              <img className="w-12 h-12 mb-5" alt="Logo" src="/star.svg" />
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h3 className="text-white font-medium">
                    Latest News Updates
                  </h3>
                  <p className="text-[#666666] text-base md:text-base">
                    Stay Current
                  </p>
                </div>
                <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                  <ArrowUpRight className="text-black w-5 h-5" />
                </div>
              </div>

              <h3 className="text-gray-400 mt-6">
                Over 1,000 articles published monthly
              </h3>
            </div>
          </div>

          <div className="py-10 px-20 border-[0.2px] border-gray-700 flex items-center justify-center">
            <div className="flex flex-col w-full max-w-md">
              <img className="w-12 h-12 mb-5" alt="Logo" src="/leaf.svg" />
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h3 className="text-white font-medium">
                    Expert Contributors
                  </h3>
                  <p className="text-[#666666] text-base md:text-base">
                    Trusted Insights
                  </p>
                </div>
                <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                  <ArrowUpRight className="text-black w-5 h-5" />
                </div>
              </div>

              <h3 className="text-gray-400 mt-6">
                50+ renowned AI experts on our team
              </h3>
            </div>
          </div>
          <div className="py-10 px-20 border-[0.2px] border-gray-700 flex items-center justify-center">
            <div className="flex flex-col w-full max-w-md">
              <img className="w-12 h-12 mb-5" alt="Logo" src="/flower.svg" />
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h3 className="text-white font-medium">Global Readership</h3>
                  <p className="text-[#666666] text-base md:text-base">
                    Worldwide Impact
                  </p>
                </div>
                <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                  <ArrowUpRight className="text-black w-5 h-5" />
                </div>
              </div>

              <h3 className="text-gray-400 mt-6">2 million monthly readers</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
