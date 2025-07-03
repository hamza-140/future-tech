function FeatureHero() {
  return (
    <section className="bg-[#141414]">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pl-30 py-20 pr-15 md:basis-[40%] border-[0.2px] border-[#1A1A1A] flex flex-col justify-center">
            <img className="w-12 h-12 mb-5" alt="Logo" src="/fan.svg" />
            <h1 className="text-xl md:text-3xl font-semibold text-white leading-tight">
              Future Technology Blog
            </h1>
            <p className="text-[#666666] mt-5 text-base md:text-lg">
              Stay informed with our blog section dedicated to future
              technology.
            </p>
          </div>
          <div className="relative flex-1 py-20 md:basis-[60%] flex items-center border-[0.2px] border-gray-700 overflow-hidden px-15">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Quantity</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Over 1,000 articles on emerging tech trends and
                    breakthroughs.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Variety</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Articles cover fields like AI, robotics, biotechnology, and
                    more.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Frequency</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Fresh content added daily to keep you up to date.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Authoritative</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Written by our team of tech experts and industry
                    professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 pl-30 py-20 pr-15 md:basis-[40%] border-[0.2px] border-gray-700 flex flex-col justify-center">
            <img className="w-12 h-12 mb-5" alt="Logo" src="/box.svg" />
            <h1 className="text-xl md:text-3xl font-semibold text-white leading-tight">
              Research Insights Blogs
            </h1>
            <p className="text-[#666666] mt-5 text-base md:text-lg">
              Dive deep into future technology concepts with our research
              section.
            </p>
          </div>
          <div className="relative flex-1 py-20 md:basis-[60%] flex items-center border-[0.2px] border-gray-700 overflow-hidden px-15">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Depth</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    500+ research articles for in-depth understanding.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Graphics</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Visual aids and infographics to enhance comprehension.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Trends</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Explore emerging trends in future technology research.
                  </p>
                </div>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg flex items-center p-10 justify-center text-white">
                <div>
                  <h1 className="mb-5 font-semibold">Contributors</h1>
                  <p className="text-[#666666] mt-5 text-sm md:text-sm">
                    Contributions from tech researchers and academics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHero;
