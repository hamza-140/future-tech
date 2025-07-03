import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function Blogs() {
  const categories = [
    "All",
    "Quantum Computing",
    "AI Ethics",
    "Space Exploration",
    "Biotechnology",
    "Renewable Energy",
  ];
  const blogs = [
    {
      id: 1,
      author: "Hamza Shah",
      date: "October 20, 2024",
      title: "Quantum Breakthroughs in 2025",
      description:
        "Explore how quantum computing is solving complex problems in milliseconds.",
    },
    {
      id: 2,
      author: "Ayesha Khan",
      title: "AI Ethics in Autonomous Systems",
      date: "October 20, 2024",
      description:
        "A deep dive into the moral challenges posed by self-learning machines.",
    },
    {
      id: 3,
      author: "Ali Raza",
      title: "SpaceX and the New Era of Space Travel",
      date: "October 20, 2024",
      description:
        "The future of commercial space exploration is closer than you think.",
    },
  ];
  return (
    <div className="bg-[#141414]">
      <div className="categories-container flex text-gray-300 justify-center gap-4 py-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category border-[0.2px] border-gray-700 px-4 py-4 w-50 text-center rounded-md cursor-pointer hover:bg-[#1F1F1F] transition"
          >
            {category}
          </div>
        ))}
      </div>
      <hr className="border-t border-gray-700" />
      <div className="blog-list space-y-8 mt-4">
        {blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            <div className="flex flex-col md:flex-row px-20 justify-around items-center md:items-center text-white">
              <div className="text-gray-400 text-sm flex items-center gap-2 pr-30">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/user.jpg"
                  alt="User 1"
                />
                <div className="flex flex-col">
                  <p>{blog.author}</p>
                  <p>Software Engineer</p>
                </div>
              </div>

              {/* Title + Description */}
              <div className="flex-1">
                <p className="text-[#666666] text-base font-semibold pb-5">
                  {blog.date}
                </p>
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{blog.description}</p>
              </div>

              {/* View Blog Button */}
              <Link className="flex items-center gap-x-2">
                <div className="border-[0.2px] border-gray-700 flex p-2 px-3 rounded-md items-center">
                  <p className="text-[#666666] text-base">View Blog</p>
                  <ArrowUpRight size={24} color={"#FFD11A"} />
                </div>
              </Link>
            </div>

            <hr className="border-t border-gray-700" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
