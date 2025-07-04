import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function ConnectBanner() {
  return (
    <section className="w-full bg-[#1A1A1A] px-4 md:px-12 py-6 md:py-8 lg:py-10">
      <div className="flex pb-15 gap-12">
        <img
          src="/icon.svg"
          alt="Icon"
          width={120}
          height={120}
          className="pt-5"
        />
        <div className="flex justify-between">
          <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-center">
            <p className="w-fit text-gray-200 bg-[#333333] mt-4 rounded-sm py-1 px-2">
              Learn, Connect, and Innovate
            </p>

            <h1 className="text-white text-2xl md:text-4xl mt-2 lg:text-5xl font-semibold">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="text-[#666666] mt-5 text-base md:text-lg">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-10 border-[0.2px] border-gray-700 rounded-2xl">
        <div className="py-10 px-20 border-15 rounded-2xl border-[#141414] flex items-center justify-center">
          <div className="flex flex-col w-full max-w-md">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <h3 className="text-white font-medium">Resource Access</h3>
              </div>
              <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </div>

            <h3 className="text-gray-400 mt-2">
              Visitors can access a wide range of resources, including ebooks,
              whitepapers, reports.
            </h3>
          </div>
        </div>

        <div className="py-10 px-20 border-15 rounded-2xl border-[#141414] flex items-center justify-center">
          <div className="flex flex-col w-full max-w-md">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <h3 className="text-white font-medium">Community Forum</h3>
              </div>
              <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </div>

            <h3 className="text-gray-400 mt-2">
              Join our active community forum to discuss industry trends and
              collaborate with peers.
            </h3>
          </div>
        </div>
        <div className="py-10 px-20 border-15 rounded-2xl border-[#141414] flex items-center justify-center">
          <div className="flex flex-col w-full max-w-md">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <h3 className="text-white font-medium">Tech Events</h3>
              </div>
              <div className="w-10 h-10 hover:cursor-pointer rounded-full bg-[#FFD11A] flex items-center justify-center">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </div>

            <h3 className="text-gray-400 mt-2">
              Stay updated on upcoming tech events and webinars to enhance
              knowledge.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectBanner;
