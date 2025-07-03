import React from "react";

function FeatureBanner() {
  return (
    <section className="w-full bg-[#1A1A1A] px-4 md:px-12 py-6 md:py-8 lg:py-10">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-center">
        <p className="w-fit text-gray-200 bg-[#333333] mt-4 rounded-sm py-1 px-2">
          Unlock the Power of
        </p>

        <h1 className="text-white text-2xl md:text-4xl mt-2 lg:text-5xl font-semibold">
          FutureTech Features
        </h1>
      </div>
    </section>
  );
}

export default FeatureBanner;
