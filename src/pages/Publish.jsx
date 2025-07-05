import React, { useState } from "react";
import TiptapEditor from "../components/Editor";
import { toast, ToastContainer } from "react-toastify";

function Publish() {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1/api/v1/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) throw new Error("Failed to publish");

      toast.success("Blog published successfully", {
        theme: "dark",
        style: { background: "#1A1A1A", color: "#FFD11A" },
      });
    } catch (err) {
      toast.error(`${err.message}`, {
        theme: "dark",
        style: { background: "#1A1A1A", color: "#FFD11A" },
      });
    }
  };

  return (
    <section className="min-h-screen bg-[#141414] text-white px-4 md:px-8 py-12">
      <ToastContainer />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">📝 Write a New Blog</h1>
        <TiptapEditor content={content} setContent={setContent} />

        <button
          onClick={handleSubmit}
          className="mt-6 bg-[#FFD11A] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Publish Blog
        </button>
      </div>
    </section>
  );
}

export default Publish;
