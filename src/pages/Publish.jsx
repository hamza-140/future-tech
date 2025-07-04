import React, { useState } from "react";
import BlogAnalyzer from "../components/BlogAnalyzer";

const Publish = () => {
  const [content, setContent] = useState("");

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Write Your Blog</h2>

      <textarea
        rows="10"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        placeholder="Write your blog content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <BlogAnalyzer content={content} />
    </div>
  );
};

export default Publish;
