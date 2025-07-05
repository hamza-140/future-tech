import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Settings, LogOut, Edit3, User, Lock } from "lucide-react";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: "Hamza Shah",
    email: "hamza@example.com",
    avatar: "/user.jpg",
    bio: "Tech enthusiast & AI explorer. Sharing thoughts and research at FutureTech.",
    blogs: [
      {
        id: 1,
        title: "Quantum Breakthroughs in 2025",
        views: 540,
      },
      {
        id: 2,
        title: "AI Ethics in Autonomous Systems",
        views: 410,
      },
    ],
  };

  return (
    <section className="min-h-screen bg-[#141414] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border border-gray-600"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
                <p className="mt-2 text-[#888888] max-w-xl">{user.bio}</p>
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-400 hover:text-white transition"
                title="Account Settings"
              >
                <Settings size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFD11A]">
            📝 My Blogs
          </h3>
          <div className="space-y-4">
            {user.blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex justify-between items-center bg-[#1A1A1A] border border-gray-700 rounded-md p-4"
              >
                <div>
                  <h4 className="text-lg font-medium">{blog.title}</h4>
                  <p className="text-gray-500 text-sm">{blog.views} views</p>
                </div>
                <button className="bg-[#FFD11A] text-black px-4 py-2 rounded hover:opacity-90 transition">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-[#1A1A1A] border border-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white mb-4 flex items-center gap-2"
                  >
                    <Settings size={20} /> Account Settings
                  </Dialog.Title>

                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] px-4 py-3 rounded text-gray-200 transition">
                      <User size={18} /> Edit Personal Info
                    </button>
                    <button className="w-full flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] px-4 py-3 rounded text-gray-200 transition">
                      <Lock size={18} /> Change Password
                    </button>
                    <button className="w-full flex items-center gap-3 bg-[#2a2a2a] hover:bg-red-500 hover:text-white px-4 py-3 rounded text-red-400 transition">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>

                  <div className="mt-6 text-right">
                    <button
                      type="button"
                      className="text-sm text-gray-400 hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}

export default Profile;
